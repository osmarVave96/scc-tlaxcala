import React, { useMemo, useCallback } from 'react';
import { useSettingsStore } from '@/stores/useSettings';
import { SettingsContext } from '@/contexts/SettingsContext';
import useSettings from '@/hooks/settings';
import { registerLoadingContext } from '@/services/apiService';

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  // Global loading state - inicializar en false
  const [globalLoading, setGlobalLoading] = React.useState(false);
  
  // Use optimized hook with React Query
  const {
    homePageData,
    siteSettings,
    climateGovernancePageData,
    climateInformationPageData,
    isLoading,
    error,
    refreshHomePage,
    refreshSiteSettings,
    refreshClimateGovernancePage,
    refreshClimateInformationPage,
  } = useSettings();

  const { setSettings, setHomePage, setClimateGovernancePageData, setClimateInformationPageData } = useSettingsStore();

  // Inicializar el estado de loading cuando la app se carga
  React.useEffect(() => {
    // Si tenemos datos cargados, ocultar el loading inicial
    if (siteSettings || homePageData || climateGovernancePageData || climateInformationPageData) {
      setGlobalLoading(false);
    }
  }, [siteSettings, homePageData, climateGovernancePageData, climateInformationPageData]);

  // Registrar el contexto de loading para APIService
  React.useEffect(() => {
    registerLoadingContext({ setGlobalLoading });
  }, [setGlobalLoading]);

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

  React.useEffect(() => {
    if (climateInformationPageData) {
      setClimateInformationPageData(climateInformationPageData);
    }
  }, [climateInformationPageData, setClimateInformationPageData]);

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

  const handleRefreshClimateInformationPage = useCallback(async () => {
    try {
      await refreshClimateInformationPage();
    } catch (error) {
      console.error('Error refreshing climate information page:', error);
    }
  }, [refreshClimateInformationPage]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    siteSettings,
    homePageData,
    climateGovernancePageData,
    climateInformationPageData,
    isLoading,
    error: error?.message || null,
    refreshSettings: handleRefreshSettings,
    refreshHomePage: handleRefreshHomePage,
    refreshClimateGovernancePage: handleRefreshClimateGovernancePage,
    refreshClimateInformationPage: handleRefreshClimateInformationPage,
    globalLoading,
    setGlobalLoading,
  }), [siteSettings, homePageData, climateGovernancePageData, climateInformationPageData, isLoading, error, handleRefreshSettings, handleRefreshHomePage, handleRefreshClimateGovernancePage, handleRefreshClimateInformationPage, globalLoading, setGlobalLoading]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
