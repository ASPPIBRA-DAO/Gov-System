import type { AuthState } from '../../types';

import { jwtDecode } from 'jwt-decode';
// Importação nova: Permite ler os dados do usuário direto do token
import { useSetState } from 'minimal-shared/hooks';
import { useMemo, useEffect, useCallback } from 'react';

import axios from 'src/lib/axios';

import { JWT_STORAGE_KEY } from './constant';
import { AuthContext } from '../auth-context';
import { setSession, isValidToken } from './utils';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// Define o formato dos dados que vêm dentro do Token JWT gerado pelo Worker
type JWTPayload = {
  userId: string;
  email: string;
  role?: string;
  exp: number;
};

export function AuthProvider({ children }: Props) {
  const { state, setState } = useSetState<AuthState>({ user: null, loading: true });

  /**
   * 1. VERIFICAÇÃO DE SESSÃO (Ao carregar a página/F5)
   * Lógica: Se existe um token válido no navegador, decodificamos ele 
   * para pegar o email e ID, sem precisar chamar o backend novamente.
   */
  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(JWT_STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        // Decodifica o token (Client-side decoding)
        const decoded = jwtDecode<JWTPayload>(accessToken);

        const user = {
          id: decoded.userId,
          email: decoded.email,
          role: decoded.role || 'admin', // Fallback temporário para testes
          displayName: decoded.email.split('@')[0],
          accessToken,
        };

        setState({ user, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error('Sessão inválida:', error);
      setSession(null);
      setState({ user: null, loading: false });
    }
  }, [setState]);

  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------------------

  /**
   * 2. LOGIN
   * Conecta com: App/backend/worker/src/routes/auth.ts (POST /login)
   */
  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      if (!accessToken) throw new Error('Token não recebido');

      setSession(accessToken);

      setState({
        user: {
          ...user,
          accessToken,
          role: 'admin',
          displayName: user.email.split('@')[0],
        },
      });
    } catch (error) {
      console.error('Erro de Login:', error);
      throw error; // Repassa o erro para a tela exibir o alerta vermelho
    } 
  }, [setState]);

  /**
   * 3. REGISTRO
   * Conecta com: App/backend/worker/src/routes/users.ts (POST /register)
   */
  const register = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      await axios.post('/users/register', {
        email,
        password,
        // firstName e lastName podem ser enviados se adicionarmos no banco depois
      });
      
      // Opcional: Poderíamos chamar login(email, password) aqui para logar automático
    } catch (error) {
      console.error('Erro de Registro:', error);
      throw error;
    }
  }, []);

  /**
   * 4. LOGOUT
   * Limpa tudo e manda o usuário para fora
   */
  const logout = useCallback(async () => {
    setSession(null);
    setState({ user: null });
  }, [setState]);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user ? { ...state.user, role: state.user?.role ?? 'admin' } : null,
      checkUserSession,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      // Agora expomos as funções reais para o resto do app usar
      login,
      register,
      logout,
    }),
    [checkUserSession, login, logout, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
