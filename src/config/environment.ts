// Environment configuration
export const ENV = {
  // Current environment
  NODE_ENV: import.meta.env.MODE || 'development',
  
  // API Configuration
  API: {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || ' https://api.cambioclimaticotlaxcala.mx/',
    TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000'),
  },
  
  // Feature flags
  FEATURES: {
    DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
    LOG_REQUESTS: import.meta.env.VITE_LOG_REQUESTS === 'true',
  },
  
  // App configuration
  APP: {
    NAME: 'SCC Tlaxcala',
    VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  },
} as const;

// Environment helpers
export const isDevelopment = ENV.NODE_ENV === 'development';
export const isProduction = ENV.NODE_ENV === 'production';
export const isStaging = ENV.NODE_ENV === 'staging';

// API URL helpers
export const getApiBaseUrl = (): string => ENV.API.BASE_URL;
export const getApiTimeout = (): number => ENV.API.TIMEOUT;

// Feature flag helpers
export const shouldLogRequests = (): boolean => ENV.FEATURES.LOG_REQUESTS || isDevelopment;
export const isDebugMode = (): boolean => ENV.FEATURES.DEBUG_MODE || isDevelopment;
