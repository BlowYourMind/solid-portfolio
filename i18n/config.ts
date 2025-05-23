export const supportedLanguages = [
  {
    code: "en",
    label: "English",
    default: true,
  },
  {
    code: "ru",
    label: "Русский",
  },
  {
    code: "lv",
    label: "Latviešu",
  },
];

export const i18n = {
  locales: supportedLanguages.map(({ code }) => code),
  defaultLocale:
    supportedLanguages.find(({ default: isDefault }) => isDefault)?.code ??
    "en",
} as const;
