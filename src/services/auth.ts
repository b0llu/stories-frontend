import axios, { AxiosError } from 'axios';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}` || 'http://localhost:8000/api/v1';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  fullname?: string;
  bio?: string;
  birthday?: string;
  profile_picture?: string;
  created_at: string;
  updated_at: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post(
      '/auth/login', 
      new URLSearchParams({
        username: credentials.username,
        password: credentials.password,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    );
    return response.data;
  },

  async register(credentials: RegisterCredentials) {
    const response = await api.post(
      '/auth/register', 
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  },

  async checkSession(): Promise<UserProfile | null> {
    try {
      const response = await api.get('/auth/check-session');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Session check failed:', error.response?.data);
      }
      return null;
    }
  },

  logout() {
    localStorage.removeItem('auth_token');
  },

  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  },

  getToken() {
    return localStorage.getItem('auth_token');
  },
}; 