import { Suspense } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { queryClient } from "@/lib/react-query";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="auth-theme">
        <GlobalLayout>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          }>
            <AppRoutes />
          </Suspense>
        </GlobalLayout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
