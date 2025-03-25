"use client";

import { AnimationsProvider } from "@/components/AnimationsToggle";
import { ThemeProvider } from "next-themes";

type ProvidesProps = {
  children: React.ReactNode;
};

const Providers = (props: ProvidesProps) => {
  const { children } = props;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <AnimationsProvider>{children}</AnimationsProvider>
    </ThemeProvider>
  );
};

export default Providers;
