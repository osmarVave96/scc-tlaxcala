import React, { memo } from 'react';
import { Footer } from './Footer';
// import { FloatingActionButton } from '../ui/floating-action-button';
import { SettingsProvider } from '@/providers/SettingsProvider';
import { Header } from './Header';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export const GlobalLayout = memo<GlobalLayoutProps>(({ children }) => {
  return (
    <SettingsProvider>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer />
        
        {/* Global Floating Action Button */}
        {/* <FloatingActionButton /> */}
      </div>
    </SettingsProvider>
  );
});

GlobalLayout.displayName = 'GlobalLayout'; 