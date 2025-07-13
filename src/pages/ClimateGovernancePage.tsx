import { useState } from "react";
import { FileText, Users, BarChart3, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { SectionNavigator } from "@/components/ui/section-navigator";

const ClimateGovernancePage = () => {
  const [selectedTab, setSelectedTab] = useState("legal");

  // Secciones para el navegador lateral
  const navigationSections = [
    {
      id: "what-is-governance",
      title: "¿Qué es la gobernanza climática?",
      subsections: [
        { id: "ciccet-intro", title: "CICCET" },
        { id: "state-system-intro", title: "Sistema Estatal de Cambio Climático" },
        { id: "occc-intro", title: "OCCC" },
      ],
    },
    {
      id: "legal-framework",
      title: "Marco normativo",
    },
    {
      id: "reports",
      title: "CICCET",
    },
    {
      id: "dashboard",
      title: "Sistema Estatal de Cambio Climático",
    },
    {
      id: "community",
      title: "Observatorio Ciudadano (OCCC)",
    },
  ];

  // Datos para la sección de Marco Normativo
  const normativeFrameworkCards = [
    {
      title: "Ley General de Cambio Climático",
      description: "Legal framework for climate change at national level",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Ley General de Cambio Climático",
        type: "image" as const,
      },
    },
    {
      title: "Ley de Protección del Medio Ambiente",
      description: "Environmental protection regulations and guidelines",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Ley de Protección del Medio Ambiente",
        type: "image" as const,
      },
    },
    {
      title: "Ley de Desarrollo Forestal",
      description: "Forest development and conservation regulations",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Ley de Desarrollo Forestal",
        type: "image" as const,
      },
    },
    {
      title: "Ley de Gestión Integral de Residuos",
      description: "Comprehensive waste management regulations",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Ley de Gestión Integral de Residuos",
        type: "image" as const,
      },
    },
    {
      title: "Ley de Agua",
      description: "Water resources management and protection",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Ley de Agua",
        type: "image" as const,
      },
    },
  ];

  // Datos para el Observatorio Ciudadano
  const observatoryObjectives = [
    {
      title: "Monitor Climate Actions",
      description: "Track and evaluate climate initiatives across the state",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Monitor Climate Actions",
        type: "image" as const,
      },
    },
    {
      title: "Community Engagement",
      description: "Facilitate citizen participation in climate governance",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Community Engagement",
        type: "image" as const,
      },
    },
    {
      title: "Data Collection",
      description: "Gather climate data from various sources across Tlaxcala",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Data Collection",
        type: "image" as const,
      },
    },
    {
      title: "Policy Advocacy",
      description: "Advocate for effective climate policies and regulations",
      media: {
        src: "/api/placeholder/400/300",
        alt: "Policy Advocacy",
        type: "image" as const,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Section Navigator */}
      <SectionNavigator sections={navigationSections} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/api/placeholder/1200/600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80" />
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  CLIMATE GOVERNANCE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Climate Governance in Tlaxcala
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Coordination, legislation and protection for sustainable development and climate action in Tlaxcala
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Climate Governance Section */}
      <section id="what-is-governance" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What is Climate Governance?
              </h2>
              <p className="text-lg text-gray-600">
                Climate governance involves the structures, laws, certifications, implementation processes and actions that determine how society manages climate change in Tlaxcala.
              </p>
            </div>

            {/* Key Components */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div id="ciccet-intro" className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">CICCET</h3>
                <p className="text-gray-600 text-sm">
                  Intersectoral Commission for Climate Change - coordinating body for climate policies
                </p>
              </div>
              <div id="state-system-intro" className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">State Climate Change System</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive system for climate monitoring and response coordination
                </p>
              </div>
              <div id="occc-intro" className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">OCCC</h3>
                <p className="text-gray-600 text-sm">
                  Citizen Observatory for Climate Change - promoting citizen participation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section id="legal-framework" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Legal Framework
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive legal structure supporting climate action in Tlaxcala
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === "legal"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-600 hover:text-orange-600"
                }`}
                onClick={() => setSelectedTab("legal")}
              >
                Legal Framework
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === "institutional"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-600 hover:text-orange-600"
                }`}
                onClick={() => setSelectedTab("institutional")}
              >
                Institutional Framework
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === "regulatory"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-600 hover:text-orange-600"
                }`}
                onClick={() => setSelectedTab("regulatory")}
              >
                Regulatory Framework
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {normativeFrameworkCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Explore All Legal Documents
            </Button>
          </div>
        </div>
      </section>

             {/* CICCET Section */}
       <section id="reports" className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
               Intersectoral Commission for Climate Change (CICCET)
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               CICCET coordinates and implements climate policies across different sectors, ensuring integrated and effective climate action in Tlaxcala.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 rounded-lg p-4 mb-6">
                <FileText className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Design Climate Policies
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our two main policy areas are mitigation and adaptation, focusing on 2030 targets and beyond with strategic planning for effective implementation.
              </p>
              <a href="#" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                Learn more →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Implement and Monitor
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                More than 100+ projects integrated with our climate strategy to ensure effective implementation of climate policies. We monitor progress and adjust strategies as needed.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View projects →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 rounded-lg p-4 mb-6">
                <Users className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Engage Communities
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We keep your data and your users' data safe with the strictest security protocols. Our platform is designed to protect against threats.
              </p>
              <a href="#" className="text-green-600 text-sm font-medium hover:text-green-800">
                Join community →
              </a>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Access CICCET Reports
            </Button>
          </div>
        </div>
      </section>

             {/* State Climate Change System Section */}
       <section id="dashboard" className="py-16 md:py-24 bg-blue-50">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
               State Climate Change System
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               Comprehensive monitoring and coordination system for climate action across Tlaxcala state
             </p>
           </div>

          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Real-time Climate Monitoring
                </h3>
                <p className="text-gray-600 mb-6">
                  Our state system provides continuous monitoring of climate indicators, enabling data-driven decision making for effective climate governance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Temperature and precipitation tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Air quality monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Emissions inventory</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg p-6 text-center">
                <BarChart3 className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <p className="text-sm text-gray-600">Interactive Climate Dashboard</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Access Climate Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

             {/* Citizen Observatory Section */}
       <section id="community" className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
               Citizen Observatory for Climate Change (OCCC)
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               Citizen participation platform for monitoring, proposing and evaluating climate actions in Tlaxcala
             </p>
           </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Observatory Objectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {observatoryObjectives.map((objective, index) => (
                <InfoCard key={index} {...objective} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 mr-4"
              >
                Join the Observatory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8"
              >
                Submit Climate Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateGovernancePage; 