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
    }

    const message =
      error?.response?.data?.error || error?.message || 'Erro de comunicação com a API Central';
    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async <T = unknown>(
  args: string | [string, AxiosRequestConfig]
): Promise<T> => {
  const [url, config] = Array.isArray(args) ? args : [args, {}];

  const res = await axiosInstance.get<T>(url, config);

  return res.data;
};

// ----------------------------------------------------------------------

// Sincronizado com a estrutura do CENTRAL-SYSTEM-API + Compatibilidade com Kit Minimals
export const endpoints = {
  chat: '/api/platform/chat',
  kanban: '/api/platform/kanban',
  calendar: '/api/platform/calendar',
  auth: {
    me: '/api/core/auth/me',
    signIn: '/api/core/auth/sign-in',
    signUp: '/api/core/auth/register',
    forgotPassword: '/api/core/auth/password/forgot',
  },
  // --- Restauração das chaves necessárias para o Blog, Mail e Product ---
  mail: {
    list: '/api/platform/mail/list',
    details: '/api/platform/mail/details',
    labels: '/api/platform/mail/labels',
  },
  post: {
    list: '/api/platform/post/list',
    details: '/api/platform/post/details',
    latest: '/api/platform/post/latest',
    search: '/api/platform/post/search',
  },
  product: {
    list: '/api/platform/product/list',
    details: '/api/platform/product/details',
    search: '/api/platform/product/search',
  },
  // --- Seus novos módulos de Governança ---
  agro: {
    inventory: '/api/products/agro',
  },
  rwa: {
    assets: '/api/products/rwa',
  },
} as const;