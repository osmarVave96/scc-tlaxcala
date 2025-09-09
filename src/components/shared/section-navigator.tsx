import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

interface SectionNavigatorProps {
  sections: Section[];
  className?: string;
  title?: string;
}

export const SectionNavigator = ({ sections, className = "", title = "Navegación" }: SectionNavigatorProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    // Observe all sections and subsections
    const observeElements = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
        
        // Also observe subsections
        if (section.subsections) {
          section.subsections.forEach((subsection) => {
            const subElement = document.getElementById(subsection.id);
            if (subElement) {
              observer.observe(subElement);
            }
          });
        }
      });
    };

    // Delay observation to ensure DOM is ready
    const observeTimer = setTimeout(observeElements, 100);

    // Show navigator after a delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(observeTimer);
      clearTimeout(visibilityTimer);
    };
  }, [sections]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`sticky top-4 h-fit ${className}`}>
      <div className="  rounded-lg p-4 min-w-[280px] max-w-[320px] border">
        {/* Header */}
        <div className="border-l-4 border-purple-500 pl-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {title}
          </h3>
        </div>
        
        {/* Navigation - Anchor Style */}
        <nav className="space-y-1">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Main section */}
              <button
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-3 group relative ${
                  activeSection === section.id
                    ? "bg-purple-50 text-purple-700 border-l-2 border-purple-500"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {/* Anchor dot */}
                <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-300 group-hover:bg-gray-400"
                }`} />
                
                {/* Section number */}
                <span className={`text-xs font-mono ${
                  activeSection === section.id
                    ? "text-purple-600"
                    : "text-gray-400"
                }`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                
                {/* Section title */}
                <span className="flex-1">{section.title}</span>
                
                {/* Chevron for sections with subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <ChevronRight 
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeSection === section.id ? "rotate-90" : ""
                    }`} 
                  />
                )}
              </button>
              
              {/* Subsections */}
              {section.subsections && (
                <div className="ml-8 mt-1 space-y-1">
                  {section.subsections.map((subsection, subIndex) => (
                    <button
                      key={subsection.id}
                      onClick={() => handleSectionClick(subsection.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-all duration-200 flex items-center gap-2 ${
                        activeSection === subsection.id
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-300"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {/* Subsection dot */}
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        activeSection === subsection.id
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`} />
                      
                      {/* Subsection number */}
                      <span className={`text-xs font-mono ${
                        activeSection === subsection.id
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}>
                        {(index + 1)}.{(subIndex + 1)}
                      </span>
                      
                      {/* Subsection title */}
                      <span className="flex-1">{subsection.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Progress indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Progreso</span>
            <span>{sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-purple-500 h-1 rounded-full transition-all duration-300"
              style={{ 
                width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 