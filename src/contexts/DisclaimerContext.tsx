"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DisclaimerContextType {
  isDisclaimerAccepted: boolean;
  isDisclaimerOpen: boolean;
  setDisclaimerAccepted: (accepted: boolean) => void;
  setDisclaimerOpen: (open: boolean) => void;
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined);

export function DisclaimerProvider({ children }: { children: React.ReactNode }) {
  const [isDisclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("disclaimerAccepted");
      setDisclaimerAccepted(stored === "true");
      setIsHydrated(true);
    }
  }, []);

  // Always provide context to avoid "must be used within provider" errors
  return (
    <DisclaimerContext.Provider
      value={{
        isDisclaimerAccepted,
        isDisclaimerOpen,
        setDisclaimerAccepted,
        setDisclaimerOpen,
      }}
    >
      {children}
    </DisclaimerContext.Provider>
  );
}

export function useDisclaimer() {
  const context = useContext(DisclaimerContext);
  if (!context) {
    throw new Error("useDisclaimer must be used within DisclaimerProvider");
  }
  return context;
}
