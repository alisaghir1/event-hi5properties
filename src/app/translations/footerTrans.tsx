export const footerTrans = {
    en: {
      termsOfUse: "Terms of use",
      copyright: "© 2024 High Five Properties. All rights reserved.",
    },
    ar: {
      termsOfUse: "شروط الاستخدام",
      copyright: "© 2024 هاي فايف بروبرتيز. جميع الحقوق محفوظة.",
    },
    ru: {
      termsOfUse: "Условия использования",
      copyright: "© 2024 Хай Файв Пропертиз. Все права защищены.",
    },
  } as const;
  
  export type Language = keyof typeof footerTrans;
  