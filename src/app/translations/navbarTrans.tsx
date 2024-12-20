export const navbarTrans = {
  en: { callUsNow: "Call us now" },
  ar: { callUsNow: "اتصل بنا الآن" },
  ru: { callUsNow: "Позвоните нам" },
} as const;

export type Language = keyof typeof navbarTrans; 