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
  showProgress?: boolean;
}

export const SectionNavigator = ({ sections, className = "", showProgress = false}: SectionNavigatorProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontrar la entrada con mayor intersección
        let maxIntersectionRatio = 0;
        let nextActiveId: string | null = null;

        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            nextActiveId = (entry.target as Element).id;
          }
        });

        // Solo actualizar si encontramos una sección que intersecta
        if (nextActiveId) {
          setActiveSection(nextActiveId);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], // Múltiples umbrales para mejor detección
        rootMargin: "-10% 0px -60% 0px", // Ajustado para mejor precisión
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
    const observeTimer = setTimeout(() => {
      observeElements();
      
      // Establecer sección inicial si no hay ninguna activa
      setTimeout(() => {
        if (!activeSection && sections.length > 0) {
          const firstElement = document.getElementById(sections[0].id);
          if (firstElement) {
            const rect = firstElement.getBoundingClientRect();
            // Si la primera sección está visible, activarla
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              setActiveSection(sections[0].id);
            }
          }
        }
      }, 200);
    }, 100);

    // Show navigator after a delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Agregar listener de scroll como respaldo
    const handleScroll = () => {
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - 100); // 100px offset para header
          
          if (rect.top <= 200 && rect.bottom >= 0 && distanceFromTop < closestDistance) {
            closestDistance = distanceFromTop;
            closestSection = section.id;
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    // Throttle scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(observeTimer);
      clearTimeout(visibilityTimer);
      clearTimeout(scrollTimeout);
    };
  }, [sections, activeSection]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`sticky top-4 h-fit ${className} transparent`}>
      <div className="  rounded-lg p-4 min-w-[250px] max-w-[250px] border">
        
        {/* Navigation - Anchor Style */}
        <nav className="space-y-1">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Main section */}
              <button
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-3 group relative ${
                  "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {/* Anchor line */}
                <div className={`w-1 h-8 transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-purple-500"
                    : "bg-gray-300 group-hover:bg-gray-400"
                }`} />
                
                
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
        {showProgress && (<div className="mt-6 pt-4 border-t border-gray-200">
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
        </div>)}
      </div>
    </div>
  );
}; 