import { createContext } from 'react';
import { ISiteSettingsData, IHomePageData, IClimateGovernancePageData } from '@/types/settings';

interface SettingsContextType {
  siteSettings: ISiteSettingsData | null;
  homePageData: IHomePageData | null;
  climateGovernancePageData: IClimateGovernancePageData | null;
  isLoading: boolean;
  error: string | null;
  refreshSettings: () => Promise<void>;
  refreshHomePage: () => Promise<void>;
  refreshClimateGovernancePage: () => Promise<void>;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
