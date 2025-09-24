import Hero from "@/components/layout/Hero";
import { SectionChart } from "@/components/layout/SectionChart";
import { SectionChips } from "@/components/layout/SectionChips";
import SectionTable from "@/components/layout/SectionTable";
import { useClimateAgenda } from "@/hooks";

const ClimateAgendaPage = () => {

  const { headerData, firstSection, secondSection, thirdSection, paccet } = useClimateAgenda();

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero headerData={headerData} />
        <SectionChart {...firstSection} dataSection={paccet} withIcon={true} />
        <SectionTable
          title={secondSection?.title_1 || ''}
          description={secondSection?.title_2 || ''}
          withIcon={true}
          withBackground={true}
          rows={[
          ]}
        />
        <SectionChips {...thirdSection} withIcon={true} />

    </div>
  );
};

export default ClimateAgendaPage;