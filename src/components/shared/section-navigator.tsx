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
}

export const SectionNavigator = ({ sections, className = "" }: SectionNavigatorProps) => {
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

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Show navigator after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [sections]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={` ${className}`}>
      <div className="bg-white/95  rounded-lg  p-4 min-w-[280px] max-w-[320px]">
        <div className="border-l-4 border-purple-500 pl-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Qué es la gobernanza climática
          </h3>
        </div>
        
        <nav className="space-y-2">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === section.id
                    ? "bg-purple-100 text-purple-700 border-l-2 border-purple-500"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <ChevronRight 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`} 
                />
                {section.title}
              </button>
              
              {/* Subsections */}
              {section.subsections && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection.id}
                      onClick={() => handleSectionClick(subsection.id)}
                      className={`w-full text-left px-3 py-1 rounded-md text-xs transition-all duration-200 ${
                        activeSection === subsection.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
      </div>
    </div>
  );
}; 