import { useMemo } from "react";
import { useSettings } from "./useSettings";

export const useClimateInformation = () => {
  const { climateInformationPageData, isLoading, error, refreshClimateInformationPage } = useSettings();

  // Memoized header data with proper dependency
  const headerData = useMemo(() => {
    if (!climateInformationPageData?.header?.[0]) return null;
    return climateInformationPageData.header[0];
  }, [climateInformationPageData?.header]);

  // Memoized sections data with proper dependencies
  const firstSection = useMemo(() => climateInformationPageData?.first_section, [climateInformationPageData?.first_section]);
  const secondSection = useMemo(() => climateInformationPageData?.second_section, [climateInformationPageData?.second_section]);
  const thirdSection = useMemo(() => climateInformationPageData?.third_section, [climateInformationPageData?.third_section]);
  const fourthSection = useMemo(() => climateInformationPageData?.fourth_section, [climateInformationPageData?.fourth_section]);


  return {
    climateInformationPageData,
    isLoading,
    error,
    refreshClimateInformationPage,
    headerData,
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
  };
};