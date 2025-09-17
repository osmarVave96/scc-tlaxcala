import Hero from "@/components/layout/Hero";
import SectionCards from "@/components/layout/SectionCards";
import { SectionChips } from "@/components/layout/SectionChips";
import { SectionLayout } from "@/components/shared/section-layout";
import { useClimateInformation } from "@/hooks";
import { useMemo } from "react";

const ClimateInformationPage = () => {
  const { headerData, firstSection, secondSection, thirdSection, fourthSection } = useClimateInformation();
  const idFirstSection =useMemo(() => firstSection?.title_1?.split(" ").join("-") || "", [firstSection]);
  const idSecondSection =useMemo(() => secondSection?.title_1?.split(" ").join("-") || "", [secondSection]);
  const idThirdSection =useMemo(() => thirdSection?.title_1?.split(" ").join("-") || "", [thirdSection]);
  const idFourthSection =useMemo(() => fourthSection?.title_1?.split(" ").join("-") || "", [fourthSection]);
  console.log("headerData", headerData);
  console.log("firstSection", firstSection);
  console.log("secondSection", secondSection);
  console.log("thirdSection", thirdSection);
  console.log("fourthSection", fourthSection);

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <Hero headerData={headerData} />

      <SectionLayout 
      sections={[
        {
          id: idFirstSection,
          title: firstSection?.title_1 || ""
        },
        {
          id: idSecondSection,
          title: secondSection?.title_1 || ""
        },
        {
          id: idThirdSection,
          title: thirdSection?.title_1 || ""
        },
        {
          id: idFourthSection,
          title: fourthSection?.title_1 || ""
        }
      ]} 
      children={
        <>
          <SectionChips idSection={idFirstSection} {...firstSection} withIcon={true} withSubsections={true} />
          <SectionChips idSection={idSecondSection} {...secondSection} withIcon={true} withBackground={true} withSubsections={true} />
          <SectionChips idSection={idThirdSection} {...thirdSection} withIcon={true} withSubsections={true} />
          <SectionCards idSection={idFourthSection} cards={fourthSection} withIcon={true} withBackground={true} />
        </>
      } 
      />
    </div>
  );
};

export default ClimateInformationPage;