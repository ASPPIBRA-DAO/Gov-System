import type { AuthState } from '../../types';

import { jwtDecode } from 'jwt-decode';
import { useSetState } from 'minimal-shared/hooks';
import { useMemo, useEffect, useCallback } from 'react';

import axios, { endpoints } from 'src/lib/axios';

import { JWT_STORAGE_KEY } from './constant';
import { AuthContext } from '../auth-context';
import { setSession, isValidToken } from './utils';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

type JWTPayload = {
  userId: string;
  email: string;
  role?: string;
  exp: number;
};

export function AuthProvider({ children }: Props) {
  const { state, setState } = useSetState<AuthState>({ user: null, loading: true });

  /**
   * 1. VERIFICAÇÃO DE SESSÃO (Persistência)
   * Agora busca os dados atualizados do banco via endpoint /me
   */
  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(JWT_STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        // Chamada ao backend para validar o token e pegar dados novos (AAL1)
        const response = await axios.get(endpoints.auth.me);
        const { user } = response.data;

        setState({ 
          user: { ...user, accessToken }, 
          loading: false 
        });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error('Sessão expirada:', error);
      setSession(null);
      setState({ user: null, loading: false });
    }
  }, [setState]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  /**
   * 2. LOGIN (Sign-In)
   */
  const login = useCallback(async (email: string, password: string) => {
    const response = await axios.post(endpoints.auth.signIn, { email, password });

    const { accessToken, user } = response.data;

    if (!accessToken) throw new Error('Falha na emissão da credencial.');

    setSession(accessToken);

    setState({
      user: {
        ...user,
        accessToken,
        displayName: `${user.firstName} ${user.lastName}`,
      },
    });
  }, [setState]);

  /**
   * 3. REGISTRO (Sign-Up)
   * Implementada a lógica de split de nome para compatibilidade com D1
   */
  const register = useCallback(async (email: string, password: string, name: string) => {
    // Separa "Nome Sobrenome" em firstName e lastName
    const [firstName, ...lastNameParts] = name.trim().split(' ');
    const lastName = lastNameParts.join(' ');

    const response = await axios.post(endpoints.auth.signUp, {
      email,
      password,
      firstName,
      lastName,
    });

    const { accessToken, user } = response.data;

    if (accessToken) {
      setSession(accessToken);
      setState({
        user: {
          ...user,
          accessToken,
          displayName: `${user.firstName} ${user.lastName}`,
        },
      });
    }
  }, [setState]);

  /**
   * 4. LOGOUT
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
      user: state.user,
      checkUserSession,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      login,
      register,
      logout,
    }),
    [checkUserSession, login, logout, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}