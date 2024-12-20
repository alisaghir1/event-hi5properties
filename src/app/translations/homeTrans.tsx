export const homeTrans = {
    en: {
      heading: "From Dubai to Istanbul Invest in Your Future",
      typewriter: [
        "Join us at Wyndham Hotel, Levent, Istanbul from December 27th to 29th, 2024",
        "Unlock Exceptional Opportunities in Dubai Real Estate",
        "Explore luxury homes and apartments.",
        "Secure Your Dream Property Today!",
        "Join us in exploring the finest selection of real estate that matches your vision.",
      ] as string[],  // Ensure this is typed as string[]
      bookInvitation: "Book Your Invitation",
    },
    ar: {
      heading: "من دبي إلى إسطنبول استثمر في مستقبلك",
      typewriter: [
        "انضم إلينا في فندق ويندهام، ليفنت، إسطنبول من 27 إلى 29 ديسمبر 2024",
        "اكتشف فرصًا استثنائية في عقارات دبي",
        "استكشف المنازل والشقق الفاخرة.",
        "احجز عقارك المثالي اليوم!",
        "انضم إلينا لاستكشاف أرقى العقارات التي تتوافق مع رؤيتك.",
      ] as string[],  // Ensure this is typed as string[]
      bookInvitation: "احجز دعوتك",
    },
    tr: {
      heading: "Dubai'den İstanbul'a Geleceğinize Yatırım Yapın",
      typewriter: [
        "27-29 Aralık 2024 tarihlerinde Wyndham Hotel, Levent, İstanbul'da bizimle olun",
        "Dubai Gayrimenkulünde Olağanüstü Fırsatlar Keşfedin",
        "Lüks evler ve daireleri keşfedin.",
        "Hayalinizdeki Emlak İçin Bugün Güvence Sağlayın!",
        "Vizyonunuza Uyan En İyi Emlak Seçeneklerini Keşfetmek İçin Bizimle Olun.",
      ] as string[],  // Ensure this is typed as string[]
      bookInvitation: "Davetinizi Rezervasyon Yapın",
    },
  } as const;
  
  export type Language = keyof typeof homeTrans;
  