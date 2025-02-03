"use client";
import React, { createContext, useContext, useState } from "react";

interface SheetContextType {
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  return (
    <SheetContext.Provider value={{ isOpen, openSheet, closeSheet }}>
      {children}
    </SheetContext.Provider>
  );
};

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
};
