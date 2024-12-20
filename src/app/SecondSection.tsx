'use client'
import React from "react";
import Image from "next/image";
import section1 from "./assets/main.jpg";
import { useAppContext } from "./context";
import { secondSectionTrans, Language } from "./translations/secondSectionTrans";

const SecondSection: React.FC = () => {
  const [language] = useAppContext(); // Access the language state from context

  const translation = secondSectionTrans[language as Language];

  return (
    <section className="bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20">
      <div className="text-center  mx-2">
        <h2 className="text-2xl font-bold text-customText lg:text-3xl pb-4 custom-font">
          {translation.heading1}
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
          {translation.paragraph1}
        </p>
      </div>
      <Image
        className="w-full xl:w-5/6 rounded-none xl:rounded-2xl object-cover text-center"
        src={section1}
        alt="second section image"
      />
      <div className="text-center mx-2 my-10 ">
        <h2 className="text-2xl font-bold text-customText  lg:text-3xl pb-4 custom-font">
          {translation.heading2}
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
          {translation.paragraph2}
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
