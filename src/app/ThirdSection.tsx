"use client";
import React, { useState } from "react";
import Image from "next/image";
import studio1 from "./assets/studio/s1.jpg";
import studio2 from "./assets/studio/s2.jpg";
import studio3 from "./assets/studio/s3.jpg";
import studio4 from "./assets/studio/s4.jpg";
import bedroom11 from "./assets/1 bedroom/bd-1-1.jpg";
import bedroom12 from "./assets/1 bedroom/bd-1-2.jpg";
import bedroom13 from "./assets/1 bedroom/bd-1-3.jpg";
import bedroom14 from "./assets/1 bedroom/bd-1-4.jpg";
import bedroom21 from "./assets/2 bedrooms/bd2-1.jpg";
import bedroom22 from "./assets/2 bedrooms/bd2-2.jpg";
import bedroom23 from "./assets/2 bedrooms/bd2-3.jpg";
import bedroom24 from "./assets/2 bedrooms/bd2-4.jpg";
import townhouse1 from "./assets/Town House/th-1.jpg";
import townhouse2 from "./assets/Town House/th-2.jpg";
import townhouse3 from "./assets/Town House/th-3.jpg";
import townhouse4 from "./assets/Town House/th-4.jpg";
import Loader from "./components/CustomLoader";

const apartmentImages = {
  Studio: [studio1, studio2, studio3, studio4],
  OneBedroom: [bedroom11, bedroom12, bedroom13, bedroom14],
  TwoBedroom: [bedroom21, bedroom22, bedroom23, bedroom24],
  Townhouse: [townhouse1, townhouse2, townhouse3, townhouse4],
};

const ThirdSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<"Studio" | "OneBedroom" | "TwoBedroom" | "Townhouse">("Studio");
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const handleButtonClick = (style: "Studio" | "OneBedroom" | "TwoBedroom" | "Townhouse") => {
    setSelectedStyle(style);
    setIsLoading(true); // Reset loading when switching style
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading state to false once all images are loaded
  };

  return (
    <section className="flex flex-col items-center pb-20 pt-20 bg-customText2">
      {/* Buttons container */}
      <div className="flex flex-col mx-5 lg:flex-row gap-4 mb-8 w-full px-5 lg:px-64">
        {Object.keys(apartmentImages).map((style) => (
          <button
            key={style}
            onClick={() => handleButtonClick(style as "Studio" | "OneBedroom" | "TwoBedroom" | "Townhouse")}
            className={`flex-1 px-5 py-4 text-md rounded-md lg:rounded-xl transition-all font-mono duration-300 ${
              selectedStyle === style
                ? "bg-customBg text-white"
                : "bg-none border-customBg text-black hover:text-white hover:bg-customBg"
            }`}
          >
            {style.replace(/([A-Z])/g, " $1").trim()} {/* Format button text */}
          </button>
        ))}
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center w-full h-96">
          <Loader /> {/* Custom loader component */}
        </div>
      )}

      {/* Images container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full px-5 sm:px-10 lg:px-64 pb-20">
        {apartmentImages[selectedStyle].map((imageSrc, index) => (
          <div key={index} className="flex justify-center w-full">
            <Image
              alt={`${selectedStyle} pic ${index + 1}`}
              className="hover:opacity-75 w-full h-96 transition-opacity duration-300"
              src={imageSrc}
              onLoad={handleImageLoad} // Trigger when each image is loaded
              placeholder="blur" // For smooth loading effect
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
