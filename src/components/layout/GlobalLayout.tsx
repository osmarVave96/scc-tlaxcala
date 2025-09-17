import React, { memo } from 'react';
import { Footer } from './Footer';
// import { FloatingActionButton } from '../ui/floating-action-button';
import { SettingsProvider } from '@/providers/SettingsProvider';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import LoadingPage from '@/pages/LoadingPage';
import { Header } from './Header';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayoutContent = memo<GlobalLayoutProps>(({ children }) => {
  const { globalLoading } = useGlobalLoading();

  return (
    <div className="relative min-h-screen flex flex-col">
      { !globalLoading && ( <>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </>)}
      
      {/* Global Floating Action Button */}
      {/* <FloatingActionButton /> */}
      
      {/* Global Loading Overlay */}
      {globalLoading && (
        <div className="fixed inset-0 z-50 transparent backdrop-blur-sm flex items-center justify-center">
          <div className="transparent backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <LoadingPage />
          </div>
        </div>
      )}
    </div>
  );
});

export const GlobalLayout = memo<GlobalLayoutProps>(({ children }) => {
  return (
    <SettingsProvider>
      <GlobalLayoutContent>{children}</GlobalLayoutContent>
    </SettingsProvider>
  );
});

GlobalLayout.displayName = 'GlobalLayout';
GlobalLayoutContent.displayName = 'GlobalLayoutContent'; 