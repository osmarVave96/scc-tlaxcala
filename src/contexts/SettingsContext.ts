import { createContext } from 'react';
import { ISiteSettingsData, IHomePageData, IClimateGovernancePageData, IClimateInformationPageData } from '@/types/settings';

interface SettingsContextType {
  siteSettings: ISiteSettingsData | null;
  homePageData: IHomePageData | null;
  climateGovernancePageData: IClimateGovernancePageData | null;
  climateInformationPageData: IClimateInformationPageData | null;
  isLoading: boolean;
  error: string | null;
  refreshSettings: () => Promise<void>;
  refreshHomePage: () => Promise<void>;
  refreshClimateGovernancePage: () => Promise<void>;
  refreshClimateInformationPage: () => Promise<void>;
  // Global loading state
  globalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
