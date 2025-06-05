import HomeClient from "@/components/pages/homeClient";
import { Metadata } from "next";

type Params = {
  locale: "en" | "ru" | "lv";
};

const metaByLocale: Record<Params["locale"], Metadata> = {
  en: {
    title: "Maksims Nikitins – Frontend Developer",
    description:
      "Frontend developer specializing in eCommerce and iGaming projects. Freelance available.",
    keywords: ["Maksims Nikitins", "frontend developer", "freelance", "ecommerce", "igaming", "portfolio"],
    openGraph: {
      title: "Maksims Nikitins – Frontend Developer",
      description:
        "Experienced frontend developer available for freelance. Skilled in eCommerce and iGaming projects.",
      url: "https://maxniki.pro/en",
      siteName: "Maksims Nikitins Portfolio",
      images: [
        {
          url: "https://yoursite.com/images/og-image-en.jpg",
          width: 1200,
          height: 630,
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
      images: ["https://yoursite.com/images/twitter-image-en.jpg"],
    },
  },
  ru: {
    title: "Максимс Никитинс – Фронтенд Разработчик",
    description:
      "Фронтенд разработчик с опытом в eCommerce и iGaming проектах. Доступен для фриланса.",
    keywords: ["Максимс Никитинс", "фронтенд разработчик", "фриланс", "портфолио", "ecommerce", "igaming"],
    openGraph: {
      title: "Максимс Никитинс – Фронтенд Разработчик",
      description:
        "Опытный фронтенд разработчик, доступен для фриланс-проектов. Специализация: eCommerce и iGaming.",
      url: "https://maxniki.pro/ru",
      siteName: "Портфолио Максимса Никитинса",
      images: [
        {
          url: "https://yoursite.com/images/og-image-ru.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Максимс Никитинс – Фронтенд Разработчик",
      description:
        "Доступен для фриланс-проектов. Опыт в eCommerce и iGaming.",
      images: ["https://yoursite.com/images/twitter-image-ru.jpg"],
    },
  },
  lv: {
    title: "Maksims Nikitins – Frontend Izstrādātājs",
    description:
      "Frontend izstrādātājs ar pieredzi e-komercijā un iGaming projektos. Pieejams freelance darbiem.",
    keywords: ["Maksims Nikitins", "frontend izstrādātājs", "freelance", "e-komercija", "igaming", "portfelis"],
    openGraph: {
      title: "Maksims Nikitins – Frontend Izstrādātājs",
      description:
        "Pieredzējis frontend izstrādātājs ar specializāciju e-komercijā un iGaming. Pieejams freelance projektiem.",
      url: "https://maxniki.pro/lv",
      siteName: "Maksima Nikitina portfelis",
      images: [
        {
          url: "https://yoursite.com/images/og-image-lv.jpg",
          width: 1200,
          height: 630,
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
      images: ["https://yoursite.com/images/twitter-image-lv.jpg"],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return metaByLocale[params.locale] || metaByLocale.en;
}

export default function HomePage() {
  return <HomeClient />;
}
