"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface ScrollContextType {
  heroScrolledDown: boolean;
  passedReadyText: boolean;
  nextSection: boolean;
  readyActions: boolean;
  showStickyHeader: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [heroScrolledDown, setHeroScrolledDown] = useState(false);
  const [passedReadyText, setHasPassedReadyText] = useState(false);
  const [nextSection, setNextSection] = useState(false);
  const [readyActions, setReadyActionsThreshold] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight = window.innerHeight;
      const heroThreshold = (7 * viewportHeight) / 100;
      const readyThreshold = (47 * viewportHeight) / 100;
      const threshold = (60 * viewportHeight) / 100;
      const readyActionsThreshold = (72 * viewportHeight) / 100;
      const stickyHeaderThreshold = (98 * viewportHeight) / 100;

      setHeroScrolledDown(scrollHeight > heroThreshold);
      setHasPassedReadyText(scrollHeight > readyThreshold);
      setNextSection(scrollHeight > threshold);
      setReadyActionsThreshold(scrollHeight > readyActionsThreshold);
      setShowStickyHeader(scrollHeight > stickyHeaderThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        heroScrolledDown,
        passedReadyText,
        nextSection,
        readyActions,
        showStickyHeader,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }

  return context;
};
