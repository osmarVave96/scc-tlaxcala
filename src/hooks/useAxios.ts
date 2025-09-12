import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import APIConfig from "../config/api";
import { useGlobalLoading } from "./useGlobalLoading";

interface CustomAxiosRequestConfig extends Partial<InternalAxiosRequestConfig> {
  skipLoading?: boolean;
}

const useAxios = () => {
  const { setGlobalLoading } = useGlobalLoading();
  
  // Create axios instance with base configuration
  const createAxiosInstance = (): AxiosInstance => {
    const apiConfig = APIConfig.getInstance();
    
    const instance = axios.create({
      baseURL: apiConfig.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        
      },
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log('🔄 Config:', config);
        // Solo mostrar loading si no está marcado para saltarse
        if (!(config as CustomAxiosRequestConfig).skipLoading) {
          setGlobalLoading(true);
          console.log('🔄 Mostrando loading global...');
        }
        return config;
      },
      (error) => {
        // Hide loading on request error
        console.log('❌ Error en request, ocultando loading...');
        setGlobalLoading(false);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    instance.interceptors.response.use(
      (response) => {
        console.log('🔄 Response:', response);
        // Solo ocultar loading si no está marcado para saltarse
        if (!(response.config as CustomAxiosRequestConfig)?.skipLoading) {
          console.log('✅ Respuesta exitosa, ocultando loading...');
          setGlobalLoading(false);
        }
        return response;
      },
      (error) => {
        // Hide loading on error response
        if (!(error.config as CustomAxiosRequestConfig)?.skipLoading) {
          console.log('❌ Error en response, ocultando loading...');
          setGlobalLoading(false);
        }
        // Handle common error scenarios
        if (error.response) {
          console.error('❌ API Error Response:', {
            status: error.response.status,
            data: error.response.data,
            url: error.config?.url
          });
          
          // Handle specific HTTP status codes
          switch (error.response.status) {
            case 401:
              // Unauthorized - redirect to login or refresh token
              console.warn('🔐 Unauthorized access');
              break;
            case 403:
              // Forbidden
              console.warn('🚫 Access forbidden');
              break;
            case 404:
              // Not found
              console.warn('🔍 Resource not found');
              break;
            case 500:
              // Server error
              console.error('💥 Server error');
              break;
          }
        } else if (error.request) {
          console.error('❌ Network Error:', error.message);
        } else {
          console.error('❌ Axios Error:', error.message);
        }
        
        return Promise.reject(error);
      }
    );

    return instance;
  };

  const axiosInstance = createAxiosInstance();

  // Custom axios wrapper with skipLoading support
  const customAxios = {
    get: (url: string, config?: CustomAxiosRequestConfig) => axiosInstance.get(url, config),
    post: (url: string, data?: unknown, config?: CustomAxiosRequestConfig) => axiosInstance.post(url, data, config),
    put: (url: string, data?: unknown, config?: CustomAxiosRequestConfig) => axiosInstance.put(url, data, config),
    delete: (url: string, config?: CustomAxiosRequestConfig) => axiosInstance.delete(url, config),
    patch: (url: string, data?: unknown, config?: CustomAxiosRequestConfig) => axiosInstance.patch(url, data, config),
  };

  return { 
    axios: customAxios,
    apiConfig: APIConfig.getInstance()
  };
};

export default useAxios;