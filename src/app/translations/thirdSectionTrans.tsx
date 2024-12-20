export const thirdSectionTrans = {
    en: {
      apartment: "Apartment",
      villa: "Villa",
      penthouse: "Penthouse",
      townhouse: "Townhouse",
    },
    ar: {
      apartment: "شقة",
      villa: "فيلا",
      penthouse: "بنتهاوس",
      townhouse: " تاون هاوس",
    },
    tr: {
      apartment: "Daire",
      villa: "Villa",
      penthouse: "Penthouse",
      townhouse: "Townhouse",
    },
  } as const;
  
  export type Language = keyof typeof thirdSectionTrans;
  