import { useMemo, useCallback } from 'react';
import { useSettingsContext } from './useSettingsContext';

export const useSettings = () => {
  const context = useSettingsContext();

  // Memoized selectors to prevent unnecessary re-renders
  const siteSettings = useMemo(() => context.siteSettings, [context.siteSettings]);
  const homePageData = useMemo(() => context.homePageData, [context.homePageData]);
  const climateGovernancePageData = useMemo(() => context.climateGovernancePageData, [context.climateGovernancePageData]);
  const isLoading = useMemo(() => context.isLoading, [context.isLoading]);
  const error = useMemo(() => context.error, [context.error]);

  // Memoized actions
  const refreshSettings = useCallback(() => context.refreshSettings(), [context.refreshSettings]);
  const refreshHomePage = useCallback(() => context.refreshHomePage(), [context.refreshHomePage]);
  const refreshClimateGovernancePage = useCallback(() => context.refreshClimateGovernancePage(), [context.refreshClimateGovernancePage]);
  // Memoized computed values
  const hasSettings = useMemo(() => Boolean(siteSettings), [siteSettings]);
  const hasHomePageData = useMemo(() => Boolean(homePageData), [homePageData]);
  const hasClimateGovernancePageData = useMemo(() => Boolean(climateGovernancePageData), [climateGovernancePageData]);
  // Memoized specific settings getters
  const getHeaderLogo = useCallback((useElectoralBan: boolean = false): string => {
    if (!siteSettings) return '';
    return useElectoralBan && siteSettings.header_logo_el_ban 
      ? siteSettings.header_logo_el_ban 
      : siteSettings.header_logo;
  }, [siteSettings]);

  const getFooterLogo = useCallback((useElectoralBan: boolean = false): string => {
    if (!siteSettings) return '';
    return useElectoralBan && siteSettings.footer_logo_el_ban 
      ? siteSettings.footer_logo_el_ban 
      : siteSettings.footer_logo;
  }, [siteSettings]);

  const getBackgroundEmailImage = useCallback((useElectoralBan: boolean = false): string => {
    if (!siteSettings) return '';
    return useElectoralBan && siteSettings.background_email_image_el_ban 
      ? siteSettings.background_email_image_el_ban 
      : siteSettings.background_email_image;
  }, [siteSettings]);

  const getSocialMediaUrls = useMemo(() => ({
    facebook: siteSettings?.url_fb || '',
    instagram: siteSettings?.url_instagram || '',
    twitter: siteSettings?.url_x || '',
  }), [siteSettings]);

  const getSocialMediaIcons = useMemo(() => ({
    facebook: siteSettings?.icon_fb || '',
    instagram: siteSettings?.icon_instagram || '',
    twitter: siteSettings?.icon_x || '',
  }), [siteSettings]);

  const getThemeColors = useMemo(() => ({
    buttons: siteSettings?.buttons_color || '',
    primaryText: siteSettings?.primary_text_color || '',
  }), [siteSettings]);

  return {
    // State
    siteSettings,
    homePageData,
    climateGovernancePageData,
    isLoading,
    error,
    
    // Computed values
    hasSettings,
    hasHomePageData,
    hasClimateGovernancePageData,
    // Actions
    refreshSettings,
    refreshHomePage,
    refreshClimateGovernancePage,
    // Specific getters
    getHeaderLogo,
    getFooterLogo,
    getBackgroundEmailImage,
    getSocialMediaUrls,
    getSocialMediaIcons,
    getThemeColors,
  };
};
