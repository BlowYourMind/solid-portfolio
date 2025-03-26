"use client";

import { useState, useEffect } from "react";
import { ZapIcon, ZapOffIcon } from "lucide-react";
import { Button } from "./ui/button";

import { createContext, useContext } from "react";

export const AnimationsContext = createContext({
  animationsEnabled: true,
  toggleAnimations: () => {},
});

export const AnimationsProvider = ({ children }: any) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const savedPreference = localStorage.getItem("animationsEnabled");
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === "true");
    }
    if (savedPreference === "false") {
      document.documentElement.classList.add("no-animations");
    }
  }, []);

  const toggleAnimations = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);
    localStorage.setItem("animationsEnabled", String(newState));
    if (newState) {
      document.documentElement.classList.remove("no-animations");
    } else {
      document.documentElement.classList.add("no-animations");
    }
  };

  return (
    <AnimationsContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationsContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationsContext);

const AnimationsToggle = () => {
  const { animationsEnabled, toggleAnimations } = useAnimations();

  return (
    <Button
      variant="ghost"
      className="size-9 p-0"
      onClick={toggleAnimations}
      aria-label="Toggle animations"
    >
      {animationsEnabled ? (
        <ZapIcon className="size-5" />
      ) : (
        <ZapOffIcon className="size-5" />
      )}
    </Button>
  );
};

export default AnimationsToggle;
