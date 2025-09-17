import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsContext';

export const useGlobalLoading = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useGlobalLoading must be used within a SettingsProvider');
  }
  
  return {
    globalLoading: context.globalLoading,
    setGlobalLoading: context.setGlobalLoading,
  };
};
