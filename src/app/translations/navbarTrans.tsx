export const navbarTrans = {
  en: { callUsNow: "Call us now" },
  ar: { callUsNow: "اتصل بنا الآن" },
  tr: { callUsNow: "Bizi şimdi arayın" },
} as const;

export type Language = keyof typeof navbarTrans;
