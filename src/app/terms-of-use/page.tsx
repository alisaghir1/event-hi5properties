"use client";
import React from "react";
import { useAppContext } from "../context";
import { termsTrans, Language } from "../translations/termsTrans";
import Navbar from "../components/Navbar";

const TermsAndConditions: React.FC = () => {
  const [language] = useAppContext(); // Get the current language from context
  const translation = termsTrans[language as Language]; // Get the translation for the selected language

  return (
    <>
    <Navbar />
    <section className="bg-customBg py-20">
      <div className="container mx-auto px-5 xl:px-10 py-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-customText mb-6 text-center custom-font">
          {translation.title}
        </h1>
        <p className="text-lg text-center text-white mb-8 font-mono">
          {translation.intro}
        </p>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.paymentsDisclaimer.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.paymentsDisclaimer.content}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.generalTerms.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.generalTerms.content}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.legalLiability.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.legalLiability.content}
          </p>
          <ul className="list-disc ml-6 text-base text-white font-mono">
            {translation.legalLiability.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.limitationOfLiability.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.limitationOfLiability.content}
          </p>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.limitationOfLiability.secondContent}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.intellectualProperty.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.intellectualProperty.content}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.thirdPartyLinks.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.thirdPartyLinks.content}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.forwardLookingStatements.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.forwardLookingStatements.content}
          </p>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.forwardLookingStatements.secondContent}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.copyrightTrademarks.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.copyrightTrademarks.content}
          </p>
        </section>

        <section className="section mb-12">
          <h2 className="text-2xl font-semibold text-customText mb-4 custom-font">
            {translation.contact.title}
          </h2>
          <p className="text-base text-white leading-relaxed font-mono">
            {translation.contact.content}
          </p>
        </section>
      </div>
    </section>
    </>
  );
};

export default TermsAndConditions;
