import { ReactNode } from "react";
import { SectionNavigator } from "./section-navigator";

interface Section {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

interface SectionLayoutProps {
  sections: Section[];
  children: ReactNode;
  navigationTitle?: string;
  className?: string;
  contentClassName?: string;
  navigatorClassName?: string;
}

export const SectionLayout = ({ 
  sections, 
  children,
  navigationTitle = "Navegación",
  className = "",
  contentClassName = "",
  navigatorClassName = ""
}: SectionLayoutProps) => {
  return (
    <div className={`mx-auto flex flex-row gap-8 ${className}`}>
      <SectionNavigator 
        sections={sections} 
        title={navigationTitle}
        className={navigatorClassName}
      />
      <div className={`flex-1 overflow-y-auto ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}; 