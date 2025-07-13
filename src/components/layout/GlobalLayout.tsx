import { ReactNode } from "react";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Footer } from "@/components/layout/Footer";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      
      {/* Global Footer */}
      <Footer />
      
      {/* Global Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}; 