import { useMemo } from "react";
import { useSettings } from "./useSettings";

export const useClimateAgenda = () => {
  const { climateAgendaPageData, isLoading, error, refreshClimateAgendaPage } = useSettings();

  // Memoized header data with proper dependency
  const headerData = useMemo(() => {
    if (!climateAgendaPageData?.header?.[0]) return null;
    return climateAgendaPageData.header[0];
  }, [climateAgendaPageData?.header]);

  // Memoized sections data with proper dependencies
  const firstSection = useMemo(() => climateAgendaPageData?.first_section, [climateAgendaPageData?.first_section]);
  const secondSection = useMemo(() => climateAgendaPageData?.second_section, [climateAgendaPageData?.second_section]);
  const thirdSection = useMemo(() => climateAgendaPageData?.third_section, [climateAgendaPageData?.third_section]);
  const paccet = useMemo(() => climateAgendaPageData?.paccet, [climateAgendaPageData?.paccet]);

  return {
    climateAgendaPageData,
    isLoading,
    error,
    refreshClimateAgendaPage,
    headerData,
    firstSection,
    secondSection,
    thirdSection,
    paccet,
  };
};