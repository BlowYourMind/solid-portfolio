import "../[locale]/globals.css";
import { Viewport } from "next/types";
import Main from "@/components/Main";
import Providers from "../providers";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";

type Params = {
  locale: "en" | "ru" | "lv";
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

const metaByLocale: Record<Params["locale"], Metadata> = {
  en: {
    title: "Maksims Nikitins – Frontend Developer",
    description:
      "Frontend developer specializing in eCommerce and iGaming projects. Freelance available.",
    keywords: [
      "Maksims Nikitins",
      "frontend developer",
      "freelance",
      "ecommerce",
      "igaming",
      "portfolio",
    ],
    icons: {
      icon: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/favicon.ico",
        },
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-192x192.png",
          type: "image/png",
        },
      ],
      apple:
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/apple-touch-icon.png",
    },
    openGraph: {
      title: "Maksims Nikitins – Frontend Developer",
      description:
        "Experienced frontend developer available for freelance. Skilled in eCommerce and iGaming projects.",
      url: "https://maxniki.pro/en",
      siteName: "Maksims Nikitins Portfolio",
      images: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Maksims Nikitins – Frontend Developer",
      description:
        "Skilled in eCommerce and iGaming projects. Available for freelance work.",
      images: [
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
      ],
    },
  },
  ru: {
    title: "Максимс Никитинс – Фронтенд Разработчик",
    description:
      "Фронтенд разработчик с опытом в eCommerce и iGaming проектах. Доступен для фриланса.",
    keywords: [
      "Максимс Никитинс",
      "фронтенд разработчик",
      "фриланс",
      "портфолио",
      "ecommerce",
      "igaming",
    ],
    icons: {
      icon: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/favicon.ico",
        },
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-192x192.png",
          type: "image/png",
        },
      ],
      apple:
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/apple-touch-icon.png",
    },
    openGraph: {
      title: "Максимс Никитинс – Фронтенд Разработчик",
      description:
        "Опытный фронтенд разработчик, доступен для фриланс-проектов. Специализация: eCommerce и iGaming.",
      url: "https://maxniki.pro/ru",
      siteName: "Портфолио Максимса Никитинса",
      images: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Максимс Никитинс – Фронтенд Разработчик",
      description: "Доступен для фриланс-проектов. Опыт в eCommerce и iGaming.",
      images: [
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
      ],
    },
  },
  lv: {
    title: "Maksims Nikitins – Frontend Izstrādātājs",
    description:
      "Frontend izstrādātājs ar pieredzi e-komercijā un iGaming projektos. Pieejams freelance darbiem.",
    keywords: [
      "Maksims Nikitins",
      "frontend izstrādātājs",
      "freelance",
      "e-komercija",
      "igaming",
      "portfelis",
    ],
    icons: {
      icon: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/favicon.ico",
        },
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-192x192.png",
          type: "image/png",
        },
      ],
      apple:
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/apple-touch-icon.png",
    },
    openGraph: {
      title: "Maksims Nikitins – Frontend Izstrādātājs",
      description:
        "Pieredzējis frontend izstrādātājs ar specializāciju e-komercijā un iGaming. Pieejams freelance projektiem.",
      url: "https://maxniki.pro/lv",
      siteName: "Maksima Nikitina portfelis",
      images: [
        {
          url: "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
        },
      ],
      locale: "lv_LV",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Maksims Nikitins – Frontend Izstrādātājs",
      description:
        "Frontend izstrādātājs ar iGaming un e-komercijas pieredzi. Freelance darbiem pieejams.",
      images: [
        "https://bsvbucket.s3.eu-north-1.amazonaws.com/images/portfolio/web-app-manifest-512x512.png",
      ],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return metaByLocale[resolvedParams.locale] || metaByLocale.en;
}

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
