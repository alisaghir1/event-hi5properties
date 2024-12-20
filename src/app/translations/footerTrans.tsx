export const footerTrans = {
  en: {
    termsOfUse: "Terms of use",
    copyright: "© 2024 High Five Properties. All rights reserved.",
  },
  ar: {
    termsOfUse: "شروط الاستخدام",
    copyright: "© 2024 هاي فايف بروبرتيز. جميع الحقوق محفوظة.",
  },
  tr: {
    termsOfUse: "Kullanım şartları",
    copyright: "© 2024 High Five Properties. Tüm hakları saklıdır.",
  },
} as const;

export type Language = keyof typeof footerTrans;
