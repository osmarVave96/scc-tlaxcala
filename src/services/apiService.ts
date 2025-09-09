import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import APIConfig from '../config/api';

// Base API response interface
export interface APIResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

// Base API error interface
export interface APIError {
  message: string;
  status: number;
  code?: string;
  details?: unknown;
}

// API Service class using Repository pattern
class APIService {
  private static instance: APIService;
  private axiosInstance: AxiosInstance;
  private apiConfig: APIConfig;

  private constructor() {
    this.apiConfig = APIConfig.getInstance();
    this.axiosInstance = this.createAxiosInstance();
  }

  public static getInstance(): APIService {
    if (!APIService.instance) {
      APIService.instance = new APIService();
    }
    return APIService.instance;
  }

  // Create configured axios instance
  private createAxiosInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: this.apiConfig.getBaseUrl(),
      timeout: this.apiConfig.getTimeout(),
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
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
  }

  // Generic GET method
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.axiosInstance.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Generic POST method
  async post<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.axiosInstance.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Generic PUT method
  async put<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.axiosInstance.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Generic DELETE method
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.axiosInstance.delete(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Generic PATCH method
  async patch<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.axiosInstance.patch(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handling method
  private handleError(error: unknown): APIError {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { 
        response: { 
          data?: { message?: string; code?: string }; 
          status: number; 
        } 
      };
      // Server responded with error status
      return {
        message: axiosError.response.data?.message || 'Server error occurred',
        status: axiosError.response.status,
        code: axiosError.response.data?.code,
        details: axiosError.response,
      };
    } else if (error && typeof error === 'object' && 'request' in error) {
      // Request was made but no response received
      return {
        message: 'No response received from server',
        status: 0,
        code: 'NETWORK_ERROR',
      };
    } else if (error && typeof error === 'object' && 'message' in error) {
      // Something else happened
      const errorWithMessage = error as { message: string };
      return {
        message: errorWithMessage.message || 'An unexpected error occurred',
        status: 0,
        code: 'UNKNOWN_ERROR',
      };
    } else {
      // Fallback for unknown error types
      return {
        message: 'An unexpected error occurred',
        status: 0,
        code: 'UNKNOWN_ERROR',
      };
    }
  }

  // Get API configuration
  getApiConfig(): APIConfig {
    return this.apiConfig;
  }
}

export default APIService;
