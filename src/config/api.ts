import { getApiBaseUrl, getApiTimeout, shouldLogRequests } from './environment';

class APIConfig {
  private static instance: APIConfig;
  private constructor() {}

  public static getInstance(): APIConfig {
    if (!APIConfig.instance) {
      APIConfig.instance = new APIConfig();
    }
    return APIConfig.instance;
  }

  // Base URL configuration from environment
  private readonly BASE_URL = getApiBaseUrl() + 'api/v1/';
  private readonly TIMEOUT = getApiTimeout();
  
  // API endpoints
  readonly ENDPOINTS = {
    HOME_PAGE: '/home/',
    SITE_SETTINGS: '/site-settings/',
    CLIMATE_GOVERNANCE_PAGE: '/climate_governance/',
    SUBSCRIBE_TO_NEWSLETTER: '/subscribe/',
  } as const;

  // Get full URL for an endpoint
  getFullUrl(endpoint: string): string {
    return `${this.BASE_URL}${endpoint}`;
  }

  // Get base URL
  getBaseUrl(): string {
    return this.BASE_URL;
  }

  // Get timeout
  getTimeout(): number {
    return this.TIMEOUT;
  }

  // Get all endpoints with full URLs
  getEndpoints(): Record<string, string> {
    const endpoints: Record<string, string> = {};
    Object.entries(this.ENDPOINTS).forEach(([key, value]) => {
      endpoints[key] = this.getFullUrl(value);
    });
    return endpoints;
  }

  // Check if logging is enabled
  shouldLogRequests(): boolean {
    return shouldLogRequests();
  }
}

export default APIConfig;
