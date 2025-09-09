import { useQuery } from '@tanstack/react-query';
import { IClimateGovernancePageData, IHomePageData, ISiteSettingsData } from "@/types/settings";
import APIService from "../services/apiService";

interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
}

// Create stable API service instance
const apiService = APIService.getInstance();
const apiConfig = apiService.getApiConfig();

// Query keys for React Query
const queryKeys = {
  homePage: ['homePage'] as const,
  siteSettings: ['siteSettings'] as const,
  climateGovernancePage: ['climateGovernancePage'] as const,
} as const;

// API functions
const fetchHomePage = async (): Promise<IHomePageData> => {
  try {
    return await apiService.get<IHomePageData>(apiConfig.ENDPOINTS.HOME_PAGE) as unknown as IHomePageData;
  } catch (error) {
    console.error('Error fetching home page:', error);
    throw error;
  }
};

const fetchClimateGovernancePage = async (): Promise<IClimateGovernancePageData> => {
  try {
    return await apiService.get<IClimateGovernancePageData>(apiConfig.ENDPOINTS.CLIMATE_GOVERNANCE_PAGE) as unknown as IClimateGovernancePageData;
  } catch (error) {
    console.error('Error fetching climate governance page:', error);
    throw error;
  }
};

const fetchSiteSettings = async (): Promise<ISiteSettingsData> => {
  try {
    return await apiService.get<ISiteSettingsData>(apiConfig.ENDPOINTS.SITE_SETTINGS) as unknown as ISiteSettingsData;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};

const useSettings = () => {
  // Home page data query
  const homePageQuery = useQuery<IHomePageData>({
    queryKey: queryKeys.homePage,
    queryFn: fetchHomePage,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
  });

  // Site settings query
  const siteSettingsQuery = useQuery<ISiteSettingsData>({
    queryKey: queryKeys.siteSettings,
    queryFn: fetchSiteSettings,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes (garbage collection time)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
  });

  // Climate governance page query
  const climateGovernancePageQuery = useQuery<IClimateGovernancePageData>({
    queryKey: queryKeys.climateGovernancePage,
    queryFn: fetchClimateGovernancePage,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes (garbage collection time)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
  });

  const subscribeToNewsletter = async (email: string): Promise<NewsletterSubscriptionResponse> => {
    try {
      const response = await apiService.post<NewsletterSubscriptionResponse>(
        apiConfig.ENDPOINTS.SUBSCRIBE_TO_NEWSLETTER, 
        { email }
      );
      return response.data;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  };

  return {
    // Home page data
    homePageData: homePageQuery.data || null,
    homePageIsLoading: homePageQuery.isLoading,
    homePageError: homePageQuery.error,
    refreshHomePage: homePageQuery.refetch,

    // Climate governance page data
    climateGovernancePageData: climateGovernancePageQuery.data || null,
    climateGovernancePageIsLoading: climateGovernancePageQuery.isLoading,
    climateGovernancePageError: climateGovernancePageQuery.error,
    refreshClimateGovernancePage: climateGovernancePageQuery.refetch,

    // Site settings data
    siteSettings: siteSettingsQuery.data || null,
    siteSettingsIsLoading: siteSettingsQuery.isLoading,
    siteSettingsError: siteSettingsQuery.error,
    refreshSiteSettings: siteSettingsQuery.refetch,
    
    // Combined loading state
    isLoading: homePageQuery.isLoading || siteSettingsQuery.isLoading || climateGovernancePageQuery.isLoading,
    
    // Combined error state
    error: homePageQuery.error || siteSettingsQuery.error || climateGovernancePageQuery.error,
    
    // Newsletter subscription
    subscribeToNewsletter,
  };
};

export default useSettings;