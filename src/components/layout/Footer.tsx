
import { ImageDisplay } from "../ui/image-display";
import { useSettings } from "@/hooks/useSettings";
import { OptimizedImageDisplay } from "../ui/optimized-image-display";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export const Footer = () => {
  const { siteSettings } = useSettings();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <ImageDisplay fallbackUrl={siteSettings?.footer_logo} alt="Logo" props={{ width: 229, height: 100 }} />

          {/* Menú del sitio */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Menú del sitio</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a onClick={() => navigate("/")} className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Inicio</a></li>
              <li><a onClick={() => navigate("/climate-governance")} className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/climate-governance" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Gobernanza Climática</a></li>
              <li><a onClick={() => navigate("/climate-information")} className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/climate-information" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Información Climática</a></li>
              <li><a onClick={() => navigate("/climate-agenda")} className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/climate-agenda" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Agenda Climática</a></li>
              <li><a onClick={() => navigate("/news")} className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/news" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Noticias</a></li>
            </ul>
          </div>

          {/* Recursos de apoyo */}
          <div className="md:col-span-1">
            <ul className="space-y-2 text-sm text-gray-600 mt-8 md:mt-0">
              <li><a href="#" className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/recursos-apoyo" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Recursos de apoyo</a></li>
              <li><a href="#" className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/informacion-legal" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Información Legal</a></li>
              <li><a href="#" className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPath === "/contacto" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
              }`}>Contacto</a></li>
            </ul>
          </div>

          {/* Síguenos */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Síguenos:</h3>
            <div className="flex space-x-4">
              <a 
                href={siteSettings?.url_fb}
                target="_blank"
                className="w-15 h-15 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <OptimizedImageDisplay imagePath={siteSettings?.icon_fb} 
                alt="Facebook" 
                className="h-15 w-15" />
              </a>
              <a 
                href={siteSettings?.url_instagram}
                target="_blank"
                className="w-15 h-15 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <OptimizedImageDisplay imagePath={siteSettings?.icon_instagram} 
                alt="Instagram" 
                className="h-15 w-15" />
              </a>
              
              <a 
                href={siteSettings?.url_x}
                target="_blank"
                className="w-15 h-15 rounded-full flex items-center justify-center"
                aria-label="Twitter"
              ><OptimizedImageDisplay imagePath={siteSettings?.icon_x} 
              alt="Twitter" 
                className="h-15 w-15" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-purple-600 transition-colors cursor-pointer">INFORMACIÓN LEGAL</a>
              <a href="#" className="hover:text-purple-600 transition-colors cursor-pointer">AVISO DE PRIVACIDAD</a>
            </div>
            <div className="text-sm text-gray-600">
              TODOS LOS DERECHOS RESERVADOS ©{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
