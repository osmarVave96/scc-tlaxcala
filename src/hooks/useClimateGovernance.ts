import { useMemo } from "react";
import { useSettings } from "./useSettings";

export const useClimateGovernance = () => {
  const { climateGovernancePageData, isLoading, error, refreshClimateGovernancePage } = useSettings();

  // Memoized header data with proper dependency
  const headerData = useMemo(() => {
    if (!climateGovernancePageData?.header?.[0]) return null;
    return climateGovernancePageData.header[0];
  }, [climateGovernancePageData?.header]);

  // Memoized sections data with proper dependencies
  const firstSection = useMemo(() => climateGovernancePageData?.first_section, [climateGovernancePageData?.first_section]);
  const secondSection = useMemo(() => climateGovernancePageData?.second_section, [climateGovernancePageData?.second_section]);
  const thirdSection = useMemo(() => climateGovernancePageData?.third_section, [climateGovernancePageData?.third_section]);
  const fourthSection = useMemo(() => climateGovernancePageData?.fourth_section, [climateGovernancePageData?.fourth_section]);


  return {
    climateGovernancePageData,
    isLoading,
    error,
    refreshClimateGovernancePage,
    headerData,
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
  };
};