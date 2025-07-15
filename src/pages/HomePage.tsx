import { TreePine, Recycle, BarChart3, CloudSun, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { IconCard } from "@/components/ui/icon-card";

import marcoNormativo from "@/assets/placeholder/marcoNormativo.png";
import { Input } from "@/components/ui/input";
import Hero from "@/components/layout/Hero";

const HomePage = () => {
  const { t } = useTranslation();

  // Datos dinámicos para las cards de gobierno
  const governmentCards = [
    {
      description: t("home.government.cards.normative.title"),
      // description: t("home.government.cards.normative.description"),
      media: {
        src: marcoNormativo,
        alt: "Marco normativo",
        type: "image" as const,
      },
    },
    {
      description: t("home.government.cards.monitoring.title"),
      // description: t("home.government.cards.monitoring.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Sistema Estatal de Cambio Climático",
        type: "image" as const,
      },
    },
    {
      description: t("home.government.cards.citizen.title"),
      // description: t("home.government.cards.citizen.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Observatorio Ciudadano",
        type: "image" as const,
      },
    },
  ];

  // Datos dinámicos para las cards de información
  const informationCards = [
    {
      title: t("home.information.cards.adaptation.title"),
      description: t("home.information.cards.adaptation.description"),
      icon: <TreePine className="h-8 w-8 text-green-600" />,
    },
    {
      title: t("home.information.cards.mitigation.title"),
      description: t("home.information.cards.mitigation.description"),
      icon: <Recycle className="h-8 w-8 text-green-600" />,
    },
    {
      title: t("home.information.cards.diagnosis.title"),
      description: t("home.information.cards.diagnosis.description"),
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    },
    {
      title: t("home.information.cards.scenarios.title"),
      description: t("home.information.cards.scenarios.description"),
      icon: <CloudSun className="h-8 w-8 text-green-600" />,
    },
  ];

  const whatIsClimateChangeCards = [
    {
      description: t("home.government.cards.normative.title"),
      // description: t("home.government.cards.normative.description"),
      media: {
        src: marcoNormativo,
        alt: "Marco normativo",
        type: "image" as const,
      },
    },
    {
      description: t("home.government.cards.monitoring.title"),
      // description: t("home.government.cards.monitoring.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Sistema Estatal de Cambio Climático",
        type: "image" as const,
      },
    },
    {
      description: t("home.government.cards.citizen.title"),
      // description: t("home.government.cards.citizen.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Observatorio Ciudadano",
        type: "image" as const,
      },
    },
    {
      description: t("home.government.cards.citizen.title"),
      // description: t("home.government.cards.citizen.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Observatorio Ciudadano",
        type: "image" as const,
      },
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero title={t("home.hero.title")} subtitle={t("home.hero.subtitle")} image={"/api/placeholder/1200/600"} hasMedia={true} buttonText={t("home.hero.getStarted")} buttonLink={"/#"} />

      {/* Government Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-green-600 font-medium mb-2">
              Gobierno climático
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("home.government.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.government.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-center items-center">
            {governmentCards.map((card, index) => (
              <InfoCard key={index} {...card}  />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              {t("home.government.knowMore")}
            </Button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-subtitle font-medium mb-2">
              Información y datos sobre Cambio Climático
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              {t("home.information.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {informationCards.map((card, index) => (
              <IconCard key={index} {...card} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              {t("home.information.knowMore")}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-subtitle font-medium mb-2">
              Información Climática
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              ¿Qué es el cambio climático?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 justify-center items-center">
            {whatIsClimateChangeCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Conoce cómo afecta a Tlaxcala
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-1">
              Sé parte del cambio climático
            </h2>
            <p className="text-md text-red-600">
            Entérate de las acciones climáticas y oportunidades para construir un mejor futuro
            </p>
          </div>
          <div className="flex flex-row gap-4 mb-8 justify-center items-center w-full">
            <div className="relative w-96">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Correo electrónico"
                className="pl-10 w-full"
              />
            </div>
            
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Suscríbete
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
