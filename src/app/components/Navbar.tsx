'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useAppContext } from "../context";
import { navbarTrans, Language } from '../translations/navbarTrans';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useAppContext();
  const t = navbarTrans[language as Language];

  const languages = [
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
    { code: "ar", label: "AR" },
  ];

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [language]);

  return (
    <nav className="absolute bg-transparent z-50 top-0 left-0 w-full border-b bg-opacity-80 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          {/* Logo */}
          <div className="flex flex-1 items-stretch justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image alt="logo" className="block h-16 w-auto" src={logo} />
            </Link>
          </div>

          {/* Call Us and Language Selector */}
          <div className="flex-shrink-0 flex flex-col-reverse items-center gap-2">
            <Link
              className="text-white font-mono bg-customText hover:bg-white hover:text-black inline-flex items-center justify-center px-3 py-2 border border-transparent font-semibold text-md md:text-lg rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              href="tel:+9710545620057"
            >
              {t.callUsNow}
            </Link>

            {/* Language Selector */}
            <div className="flex gap-4 items-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`font-mono text-lg transition duration-300 ease-in-out ${
                    language === lang.code
                      ? "text-customText font-bold"
                      : "text-white hover:text-customText"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
