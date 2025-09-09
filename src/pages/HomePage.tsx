import { memo } from 'react';
// import Email from "@/components/templates/email";
import Hero from "@/components/layout/Hero";
import { useHomePage } from "@/hooks/useHomePage";
import SectionCards from "@/components/layout/SectionCards";

const HomePage = memo(() => {
  const { headerData, firstSection, secondSection, thirdSection } = useHomePage();


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero headerData={headerData} />

      {/* First Section */}
      <SectionCards cards={firstSection}  withIcon={true} />

      {/* Second Section */}
      <SectionCards cards={secondSection}  withBackground={true} />

      {/* Third Section */}
      <SectionCards cards={thirdSection} withIcon={true} />

      {/* <Email /> */}

    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
