import { useCallback, useEffect, useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useSettings } from "@/hooks/useSettings";
import { ImageDisplay } from "../ui/image-display";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteSettings } = useSettings();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <header className="bg-transparent flex items-center shadow-sm absolute top-0 z-50 w-full" 
    style={{ height: '118px' }}>
      {/* Máscara de opacidad */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: '#000000', 
          opacity: 0.3,
          zIndex: 0
        }}
      />
      <div className="w-full px-8 relative" style={{ zIndex: 10 }}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ImageDisplay fallbackUrl={siteSettings?.header_logo} alt="Logo" props={{ width: 229, height: 100 }} />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-start space-x-6 flex-1 justify-end">
            <a 
              onClick={() => navigate("/")} 
              className={`text-sm cursor-pointer transition-colors whitespace-nowrap ${
                currentPath === "/" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              Inicio
            </a>
            
            <a 
              onClick={() => navigate("/climate-governance")} 
              className={`flex items-center gap-3 cursor-pointer transition-colors text-center ${
                currentPath === "/climate-governance" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Gobernanza</div>
                <div>Climática</div>
              </div>
              <ChevronDown className={`mx-auto h-3 w-3 mt-1 ${
                currentPath === "/climate-governance" ? "text-orange-500" : "text-orange-500"
              }`} />
            </a>
            
            <a 
              href="#" 
              className={`cursor-pointer transition-colors text-center ${
                currentPath === "/informacion-climatica" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Información</div>
                <div>Climática</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className={`cursor-pointer transition-colors text-center ${
                currentPath === "/agenda-climatica" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Agenda</div>
                <div>Climática</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className={`cursor-pointer transition-colors text-center ${
                currentPath === "/noticias" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Noticias</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className={`flex items-center gap-3 cursor-pointer transition-colors text-center ${
                currentPath === "/recursos-apoyo" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Recursos</div>
                <div>de apoyo</div>
              </div>
              <ChevronDown className={`mx-auto h-3 w-3 mt-1 ${
                currentPath === "/recursos-apoyo" ? "text-orange-500" : "text-orange-500"
              }`} />
            </a>
            
            <a 
              href="#" 
              className={`cursor-pointer transition-colors text-center ${
                currentPath === "/informacion-legal" ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
              }`}
            >
              <div className="text-sm leading-tight">
                <div>Información</div>
                <div>Legal</div>
              </div>
            </a>
            
            <div className="flex items-center space-x-3 ml-4">
              <Button size="sm" className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 text-sm">
                Contacto
              </Button>
              <Button size="sm" className="bg-white cursor-pointer text-orange-600 rounded-full h-10 w-10 p-0 items-center justify-center border border-orange-500"
                      style={{ borderRadius: "50%" }}>
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-100 hover:text-orange-500 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-2 pt-5 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a 
                onClick={() => {navigate("/") ; setIsMenuOpen(false)}} 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Inicio
              </a>
              <a 
                onClick={() => {navigate("/climate-governance") ; setIsMenuOpen(false)}} 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/climate-governance" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Gobernanza Climática
              </a>
              <a 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/informacion-climatica" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Información Climática
              </a>
              <a 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/agenda-climatica" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Agenda Climática
              </a>
              <a 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/noticias" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Noticias
              </a>
              <a 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/recursos-apoyo" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Recursos de apoyo
              </a>
              <a 
                className={`block cursor-pointer px-3 py-2 transition-colors ${
                  currentPath === "/informacion-legal" ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Información Legal
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white w-full cursor-pointer">
                  Contacto
                </Button>
                <Button size="sm" className="bg-white text-orange-600 w-full border border-orange-500 cursor-pointer">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 