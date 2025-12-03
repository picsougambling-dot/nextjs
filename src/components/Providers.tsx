'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { GeolocationProvider } from "@/components/GeolocationProvider";
import { useState } from "react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem={false}
        storageKey="gigabonus-theme"
        disableTransitionOnChange={false}
      >
        <TooltipProvider>
          <GeolocationProvider>
            {children}
            <Toaster />
            <Sonner />
          </GeolocationProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}


