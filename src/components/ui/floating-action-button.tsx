import { useState } from "react";
import { Eye, X, ExternalLink, FileText, Users, BarChart3, AlertCircle } from "lucide-react";

interface FloatingActionButtonProps {
  className?: string;
}

export const FloatingActionButton = ({ className = "" }: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <FileText className="h-5 w-5" />,
      label: "View Reports",
      color: "bg-blue-600 hover:bg-blue-700",
      href: "#reports"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Join Community",
      color: "bg-green-600 hover:bg-green-700",
      href: "#community"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Data Dashboard",
      color: "bg-purple-600 hover:bg-purple-700",
      href: "#dashboard"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      label: "External Resources",
      color: "bg-gray-600 hover:bg-gray-700",
      href: "https://www.gob.mx/semarnat"
    }
  ];

  const handleActionClick = (href: string) => {
    if (href.startsWith("#")) {
      // Scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Open external link
      window.open(href, "_blank", "noopener,noreferrer");
    }
    setIsOpen(false);
  };

  const handleReportBrokenLink = () => {
    // Handle broken link reporting
    const subject = encodeURIComponent("Reporte de enlace roto");
    const body = encodeURIComponent(`Hola,

He encontrado un enlace roto en la página: ${window.location.href}

Detalles del problema:
- Enlace: [Especificar el enlace roto]
- Página: [Describir en qué página se encuentra]
- Descripción: [Describir el problema]

Gracias por su atención.`);
    
    window.open(`mailto:contacto@tlaxcala.gob.mx?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <>
      {/* Side Tab - Main Broken Link Button */}
      <div className={`fixed top-1/2 transform -translate-y-1/2 rotate-[270deg] z-50 ${className}`} style={{ right: '-86px', transformOrigin: 'center center' }}>
        <button
          onClick={handleReportBrokenLink}
          className="bg-orange-100 text-orange-600 border border-orange-300 border-b-0 px-4 py-3 rounded-t-lg shadow-lg text-sm font-medium hover:bg-orange-200 transition-all duration-200 flex items-center gap-2 group hover:translate-y-1 whitespace-nowrap"
        >
          <AlertCircle className="h-4 w-4" />
          <span>¿Algún enlace está roto?</span>
        </button>
      </div>

      {/* Mini Floating Actions (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-40">
        {/* Action Items */}
        <div className={`mb-4 space-y-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}>
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-center justify-end group"
            >
              <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg mr-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {action.label}
              </div>
              <button
                onClick={() => handleActionClick(action.href)}
                className={`p-3 rounded-full shadow-lg text-white transition-all duration-200 transform hover:scale-110 ${action.color}`}
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Mini Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-full shadow-lg text-white transition-all duration-300 transform hover:scale-110 ${
            isOpen 
              ? "bg-red-500 hover:bg-red-600 rotate-180" 
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </>
  );
}; 