import { Play, TreePine, Recycle, BarChart3, CloudSun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { IconCard } from "@/components/ui/icon-card";

const HomePage = () => {
  const { t } = useTranslation();

  // Datos dinámicos para las cards de gobierno
  const governmentCards = [
    {
      title: t("home.government.cards.normative.title"),
      description: t("home.government.cards.normative.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Marco normativo",
        type: "image" as const,
      },
    },
    {
      title: t("home.government.cards.monitoring.title"),
      description: t("home.government.cards.monitoring.description"),
      media: {
        src: "/api/placeholder/400/300",
        alt: "Sistema Estatal de Cambio Climático",
        type: "image" as const,
      },
    },
    {
      title: t("home.government.cards.citizen.title"),
      description: t("home.government.cards.citizen.description"),
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/api/placeholder/1200/600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80" />
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  CLIMA Y CAMBIO CLIMÁTICO
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                >
                  {t("home.hero.getStarted")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {t("home.hero.watchVideo")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {governmentCards.map((card, index) => (
              <InfoCard key={index} {...card} />
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
            <p className="text-sm text-green-600 font-medium mb-2">
              Información y datos sobre Cambio Climático
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
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
    </div>
  );
};

export default HomePage;
