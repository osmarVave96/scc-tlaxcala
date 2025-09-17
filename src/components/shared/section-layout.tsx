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
  className?: string;
  contentClassName?: string;
  navigatorClassName?: string;
}

export const SectionLayout = ({ 
  sections, 
  children,
  className = "",
  contentClassName = "",
  navigatorClassName = ""
}: SectionLayoutProps) => {
  return (
    <div className={`mx-auto flex flex-row gap-2 ${className}`}>
      <SectionNavigator 
        sections={sections}
        className={navigatorClassName}
      />
      <div className={`flex-1 overflow-y-auto ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}; 