'use client'
import React from "react";
import Image from "next/image";
import studio from "./assets/studio/s1.jpg";
import bedroom1 from "./assets/1 bedroom/bd-1-5.jpg";
import bedroom2 from "./assets/2 bedrooms/bd2-5.jpg";
import townhouse from "./assets/Town House/th-5.jpg";
import { useAppContext } from "./context";
import { firstSectionTrans, Language } from "./translations/firstSectionTrans";

const FirstSection: React.FC = () => {
  const [language] = useAppContext(); // Access the language state from the context

  const translation = firstSectionTrans[language as Language];

  return (
    <section className="bg-customBg h-full pt-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-12">
            <p className="hidden text-customText2 md:block font-mono">
              {translation.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src={studio}
              loading="lazy"
              alt="Studio"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-96">
            <Image
              src={bedroom1}
              loading="lazy"
              alt="1 Bedroom"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-96">
            <Image
              src={bedroom2}
              loading="lazy"
              alt="2 Bedrooms"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <Image
              src={townhouse}
              loading="lazy"
              alt="Town House"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
