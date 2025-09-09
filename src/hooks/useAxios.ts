import axios, { AxiosInstance, AxiosResponse } from "axios";
import APIConfig from "../config/api";

const useAxios = () => {
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
  };

  const axiosInstance = createAxiosInstance();

  return { 
    axios: axiosInstance,
    apiConfig: APIConfig.getInstance()
  };
};

export default useAxios;