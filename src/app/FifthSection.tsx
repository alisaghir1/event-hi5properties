"use client";
import React from "react";
import { useAppContext } from "./context";
import Swipper from "./components/Swipper";
import { fifthSectionTrans, Language } from "./translations/fifthSectionTrans";

const FifthSection: React.FC = () => {
  const [language] = useAppContext(); // Get the current language from context
  const translation = fifthSectionTrans[language as Language];

  return (
    <section className="bg-customBg py-20">
      <div className="flex flex-col items-center justify-center mx-5 xl:mx-10 py-20 ">
        <h2 className="text-2xl font-bold text-customText lg:text-3xl pb-4 custom-font">
          {translation.title}
        </h2>
        <p className="black text-center font-mono text-white">
          {translation.description}
        </p>
      </div>
      <Swipper />
    </section>
  );
};

export default FifthSection;
