export const homeTrans = {
  en: {
    heading: "Join us at the High Five Property Event in Istanbul",
    subHeading: "Istanbul 27-28-29 December",
    typewriter: [
      "Join us at Wyndham Hotel, Levent, Istanbul from December 27th to 29th, 2024",
      "Unlock Exceptional Opportunities in Dubai Real Estate",
      "Explore luxury homes and apartments.",
      "Secure Your Dream Property Today!",
      "Join us in exploring the finest selection of real estate that matches your vision.",
    ] as string[], // Ensure this is typed as string[]
    bookInvitation: "Book Your Invitation",
  },
  ar: {
    heading: "انضموا إلينا في فعالية هاي فايف للعقارات في إسطنبول.",
    subHeading: "إسطنبول، 27-29 ديسمبر",
    typewriter: [
      "انضم إلينا في فندق ويندهام، ليفنت، إسطنبول من 27 إلى 29 ديسمبر 2024",
      "اكتشف فرصًا استثنائية في عقارات دبي",
      "استكشف المنازل والشقق الفاخرة.",
      "احجز عقارك المثالي اليوم!",
      "انضم إلينا لاستكشاف أرقى العقارات التي تتوافق مع رؤيتك.",
    ] as string[], // Ensure this is typed as string[]
    bookInvitation: "احجز دعوتك",
  },
  tr: {
    heading: "Hİstanbul'daki High Five Emlak Etkinliği'ne katılın",
    subHeading: "İstanbul, 27-29 Aralık",
    typewriter: [
      "27-29 Aralık 2024 tarihlerinde Wyndham Hotel, Levent, İstanbul'da bizimle olun",
      "Dubai Gayrimenkulünde Olağanüstü Fırsatlar Keşfedin",
      "Lüks evler ve daireleri keşfedin.",
      "Hayalinizdeki Emlak İçin Bugün Güvence Sağlayın!",
      "Vizyonunuza Uyan En İyi Emlak Seçeneklerini Keşfetmek İçin Bizimle Olun.",
    ] as string[], // Ensure this is typed as string[]
    bookInvitation: "Davetinizi Rezervasyon Yapın",
  },
} as const;

export type Language = keyof typeof homeTrans;
