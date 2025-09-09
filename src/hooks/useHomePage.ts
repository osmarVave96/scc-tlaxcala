import { useMemo, useCallback } from 'react';
import { useSettings } from './useSettings';

export const useHomePage = () => {
  const { homePageData, isLoading, error, refreshHomePage } = useSettings();

  // Memoized header data with proper dependency
  const headerData = useMemo(() => {
    if (!homePageData?.header?.[0]) return null;
    return homePageData.header[0];
  }, [homePageData?.header]);

  // Memoized sections data with proper dependencies
  const firstSection = useMemo(() => homePageData?.first_section, [homePageData?.first_section]);
  const secondSection = useMemo(() => homePageData?.second_section, [homePageData?.second_section]);
  const thirdSection = useMemo(() => homePageData?.third_section, [homePageData?.third_section]);

  // Memoized computed values
  const hasHeaderData = useMemo(() => Boolean(headerData), [headerData]);
  const hasFirstSection = useMemo(() => Boolean(firstSection), [firstSection]);
  const hasSecondSection = useMemo(() => Boolean(secondSection), [secondSection]);
  const hasThirdSection = useMemo(() => Boolean(thirdSection), [thirdSection]);

  // Memoized sorted items for each section with stable references
  const sortedFirstSectionItems = useMemo(() => {
    if (!firstSection?.items) return [];
    return [...firstSection.items].sort((a, b) => a.order - b.order);
  }, [firstSection?.items]);

  const sortedSecondSectionItems = useMemo(() => {
    if (!secondSection?.items) return [];
    return [...secondSection.items].sort((a, b) => a.order - b.order);
  }, [secondSection?.items]);

  const sortedThirdSectionItems = useMemo(() => {
    if (!thirdSection?.items) return [];
    return [...thirdSection.items].sort((a, b) => a.order - b.order);
  }, [thirdSection?.items]);

  // Memoized specific getters with useCallback for stable references
  const getHeaderTitle = useCallback((index: 1 | 2 | 3): string => {
    if (!headerData) return '';
    switch (index) {
      case 1: return headerData.title1;
      case 2: return headerData.title2;
      case 3: return headerData.title3;
      default: return '';
    }
  }, [headerData]);

  const getHeaderButton = useCallback(() => {
    if (!headerData) return null;
    return {
      text: headerData.button_action_text,
      url: headerData.button_action_url,
    };
  }, [headerData]);

  const getHeaderImage = useCallback(() => {
    if (!headerData) return '';
    return headerData.image_internal;
  }, [headerData]);

  const getHeaderTitleColor = useCallback(() => {
    if (!headerData) return '';
    return headerData.title2_color;
  }, [headerData]);

  return {
    // State
    homePageData,
    isLoading,
    error,
    
    // Computed values
    hasHeaderData,
    hasFirstSection,
    hasSecondSection,
    hasThirdSection,
    
    // Actions
    refreshHomePage,
    
    // Header data
    headerData,
    getHeaderTitle,
    getHeaderButton,
    getHeaderImage,
    getHeaderTitleColor,
    
    // Sections data
    firstSection,
    secondSection,
    thirdSection,
    
    // Sorted items
    sortedFirstSectionItems,
    sortedSecondSectionItems,
    sortedThirdSectionItems,
  };
};
