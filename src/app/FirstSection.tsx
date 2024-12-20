import React from "react";
import Image from "next/image";
import studio from "./assets/studio/s1.jpg";
import bedroom1 from "./assets/1 bedroom/bd-1-5.jpg";
import bedroom2 from "./assets/2 bedrooms/bd2-5.jpg";
import townhouse from "./assets/Town House/th-5.jpg";

const FirstSection: React.FC = () => {
  return (
    <section className="bg-customBg h-full pt-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-12">
            <p className="hidden text-customText2 md:block font-mono">
            Exclusive event for investors and homebuyers in Istanbul, Turkey, from December 27th to 29th, 2024, at the Wyndham Hotel, Levent. This highly anticipated event will showcase a wide range of luxury off-plan and ready-to-move-in residential and commercial properties in Dubai, offering exceptional investment opportunities for attendees looking to explore the thriving Dubai real estate market.Dubai is one of the world’s most dynamic cities, renowned for its luxury living, world-class infrastructure, and high return on investment (ROI). With its rapid growth and secure environment, Dubai continues to attract investors from around the globe. Recognizing the increasing interest from Turkey in Dubai’s real estate market, High Five Properties is bringing this exclusive opportunity to Istanbul, offering Turkish investors and homebuyers a firsthand look at some of the most desirable properties currently available in the UAE.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src={studio}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover  transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              Studio
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-96">
            <Image
              src={bedroom1}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              1 Bedroom
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-96">
            <Image
              src={bedroom2}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover  transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              2 Bedrooms
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <Image
              src={townhouse}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover  transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              Town House
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
