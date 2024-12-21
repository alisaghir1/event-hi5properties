"use client";
import React from "react";
import Image from "next/image";
import dubai from "./assets/main1.jpg";
import Typewriter from "typewriter-effect";
import { homeTrans, Language } from "./translations/homeTrans";
import { useAppContext } from "./context";

const Home: React.FC = () => {
  const [language] = useAppContext();
  const t = homeTrans[language as Language];
  

  return (
    <div className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={dubai}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mx-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 custom-font">
          {t.heading}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 custom-font text-customText">
        {t.subHeading}
        </h2>
        <div className="text-lg text-gray-300 mb-8 font-mono">
          <Typewriter
            options={{
              strings: t.typewriter,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <a
          href="#Form"
          className="bg-customText font-mono text-white hover:bg-customBg hover:text-white py-2 px-6 rounded-md text-md md:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {t.bookInvitation}
        </a>
      </div>
    </div>
  );
};

export default Home;
