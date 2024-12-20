"use client";
import React from "react";
import { useAppContext } from "./context";
import { whyUsTrans, Language } from "./translations/whyUsTrans";

const WhyUs: React.FC = () => {
  const [language] = useAppContext(); // Get the current language from context
  const translation = whyUsTrans[language as Language];

  return (
    <section className="pb-40 bg-customText2 font-mono">
      <div className="text-center px-2 mb-20 bg-customBg py-20">
        <h2 className="text-2xl font-bold text-white lg:text-3x custom-font">
          {translation.title}
        </h2>
      </div>
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20">
          {/* Question 1 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              {translation.question1}
            </h2>
            <p className="text-gray-600">{translation.answer1}</p>
          </div>

          {/* Question 2 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              {translation.question2}
            </h2>
            <p className="text-gray-600">{translation.answer2}</p>
          </div>

          {/* Question 3 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              {translation.question3}
            </h2>
            <p className="text-gray-600">{translation.answer3}</p>
          </div>

          {/* Question 4 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              {translation.question4}
            </h2>
            <p className="text-gray-600">{translation.answer4}</p>
          </div>

          {/* Question 5 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              {translation.question5}
            </h2>
            <p className="text-gray-600">{translation.answer5}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
