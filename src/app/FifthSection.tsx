import React from "react";
import Swipper from "./components/Swipper";

const FifthSection: React.FC = () => {
  return (
    <section className="bg-customBg py-20">
      <div className="flex flex-col items-center justify-center mx-5 xl:mx-10 py-20 ">
        <h2 className="text-2xl font-bold text-customText lg:text-3xl pb-4 custom-font">
          ELEGANCE
        </h2>
        <p className=" black text-center  font-mono text-white">
        Dubai remains one of the safest and most secure cities to live in, making it an ideal destination for both personal residences and investment properties. With its global appeal, tax-free benefits, and ease of doing business, Dubai has long been recognized as a hub for investment. The city is known for its cutting-edge architecture, luxurious lifestyle, and unparalleled business opportunities. Moreover, Dubai&apos;s real estate market continues to show resilience and strong growth, making it an attractive investment destination for those seeking high returns
        </p>
      </div>
      <Swipper />
      
    </section>
  );
};

export default FifthSection;
