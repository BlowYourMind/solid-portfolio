import "../[locale]/globals.css";
import { Viewport } from "next/types";
import Main from "@/components/Main";
import Providers from "../providers";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Locale, hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className="relative" suppressHydrationWarning>
      <Providers>
          <NextIntlClientProvider>
            <Main>{children}</Main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
