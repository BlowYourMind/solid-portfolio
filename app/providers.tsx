"use client";

import { AnimationsProvider } from "@/components/AnimationsToggle";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";

type ProvidesProps = {
  children: React.ReactNode;
};

const Providers = (props: ProvidesProps) => {
  const { children } = props;

  return (
    <TRPCReactProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        enableColorScheme
        disableTransitionOnChange
      >
        <AnimationsProvider>{children}</AnimationsProvider>
      </ThemeProvider>
    </TRPCReactProvider>
  );
};

export default Providers;
