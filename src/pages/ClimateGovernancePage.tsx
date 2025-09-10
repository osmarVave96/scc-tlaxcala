
import { Header } from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SectionCards from "@/components/layout/SectionCards";
import { SectionChips } from "@/components/layout/SectionChips";
import { useClimateGovernance } from "@/hooks";
import { SectionTexts } from "@/components/layout/SectionTexts";

const ClimateGovernancePage = () => {
  const { headerData, firstSection, secondSection, thirdSection, fourthSection } = useClimateGovernance();

  console.log("firstSection", firstSection);
  console.log("secondSection", secondSection);
  console.log("thirdSection", thirdSection);
  console.log("fourthSection", fourthSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Section Navigator */}

      {/* Hero Section */}
      <Hero headerData={headerData} />
      
      {/* First Section */}
      <SectionChips {...firstSection} />

      {/* Second Section */}
      <SectionTexts id="#comision" {...secondSection}  withIcon={true} />

      {/* Third Section */}
      <SectionCards idSection="#observatorio" cards={thirdSection}  withBackground={true} withIcon={true} />

      {/* Fourth Section */}
      <SectionCards idSection="#sistema" cards={fourthSection} withIcon={true} />

    </div>
  );
};

export default ClimateGovernancePage; 