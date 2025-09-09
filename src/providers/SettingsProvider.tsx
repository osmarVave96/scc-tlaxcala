import React, { useMemo, useCallback } from 'react';
import { useSettingsStore } from '@/stores/useSettings';
import { SettingsContext } from '@/contexts/SettingsContext';
import useSettings from '@/hooks/settings';

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  // Use optimized hook with React Query
  const {
    homePageData,
    siteSettings,
    climateGovernancePageData,
    isLoading,
    error,
    refreshHomePage,
    refreshSiteSettings,
    refreshClimateGovernancePage,
  } = useSettings();

  const { setSettings, setHomePage, setClimateGovernancePageData } = useSettingsStore();

  // Update Zustand store when data changes
  React.useEffect(() => {
    if (siteSettings) {
      setSettings(siteSettings);
    }
  }, [siteSettings, setSettings]);

  React.useEffect(() => {
    if (homePageData) {
      setHomePage(homePageData);
    }
  }, [homePageData, setHomePage]);

  React.useEffect(() => {
    if (climateGovernancePageData) {
      setClimateGovernancePageData(climateGovernancePageData);
    }
  }, [climateGovernancePageData, setClimateGovernancePageData]);

  // Wrapper functions to match expected types
  const handleRefreshSettings = useCallback(async () => {
    try {
      await refreshSiteSettings();
    } catch (error) {
      console.error('Error refreshing settings:', error);
    }
  }, [refreshSiteSettings]);

  const handleRefreshHomePage = useCallback(async () => {
    try {
      await refreshHomePage();
    } catch (error) {
      console.error('Error refreshing home page:', error);
    }
  }, [refreshHomePage]);

  const handleRefreshClimateGovernancePage = useCallback(async () => {
    try {
      await refreshClimateGovernancePage();
    } catch (error) {
      console.error('Error refreshing climate governance page:', error);
    }
  }, [refreshClimateGovernancePage]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    siteSettings,
    homePageData,
    climateGovernancePageData,
    isLoading,
    error: error?.message || null,
    refreshSettings: handleRefreshSettings,
    refreshHomePage: handleRefreshHomePage,
    refreshClimateGovernancePage: handleRefreshClimateGovernancePage,
  }), [siteSettings, homePageData, climateGovernancePageData, isLoading, error, handleRefreshSettings, handleRefreshHomePage, handleRefreshClimateGovernancePage]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
