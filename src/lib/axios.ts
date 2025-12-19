import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

// Prioriza a variável do .env para facilitar o deploy desacoplado
const HOST_API = import.meta.env.VITE_API_URL || CONFIG.serverUrl;
const APP_ID = import.meta.env.VITE_APP_ID || 'gov_system_main';

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
    // Header customizado para auditoria multi-SaaS no backend
    'X-App-ID': APP_ID, 
  },
});

// Interceptor de Requisição: Injeta o Token JWT em cada chamada
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de Resposta: Tratamento de erros institucional
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Caso o backend retorne 401, a sessão expirou no Edge
    if (error?.response?.status === 401) {
      localStorage.removeItem('accessToken');
      // Opcional: window.location.href = '/auth/jwt/sign-in';
    }
    
    const message = error?.response?.data?.error || error?.message || 'Erro de comunicação com a API Central';
    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async <T = unknown>(
  args: string | [string, AxiosRequestConfig]
): Promise<T> => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args, {}];
    const res = await axiosInstance.get<T>(url, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ----------------------------------------------------------------------

// Sincronizado com a estrutura de diretórios do CENTRAL-SYSTEM-API
export const endpoints = {
  chat: '/api/platform/chat',
  kanban: '/api/platform/kanban',
  calendar: '/api/platform/calendar',
  auth: {
    me: '/api/core/auth/me',           // Rota /me que recupera a sessão
    signIn: '/api/core/auth/sign-in', // Endpoint de Login implementado
    signUp: '/api/core/auth/sign-up', // Endpoint de Registro implementado
    forgotPassword: '/api/core/auth/password/forgot', // Nova rota de reset
  },
  agro: {
    inventory: '/api/products/agro',   // Módulo de inventário rural detectado na auditoria
  },
  rwa: {
    assets: '/api/products/rwa',      // Módulo de ativos reais tokenizados
  }
} as const;