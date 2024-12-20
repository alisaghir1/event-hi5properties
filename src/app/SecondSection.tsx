import React from "react";
import Image from "next/image";
import section1 from "./assets/main.jpg";

const SecondSection: React.FC = () => {
  return (
    <section className="bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20">
      <div className="text-center  mx-2">
        <h2 className="text-2xl font-bold text-customText lg:text-3xl pb-4 custom-font">
        Discover Luxurious Living in Dubai&apos;s Prime Locations
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
        December 27th to 29th, 2024, at the Wyndham Hotel, Levent.
From 9:00 am To 11:00 pm
During the event, attendees will have the opportunity to explore a variety of residential units, including stunning villas, modern apartments, townhouses, and penthouses, all situated in some of the most sought-after neighbourhoods in Dubai. From the iconic skyline of Downtown Dubai to the tranquil surroundings of Palm Jumeirah, High Five Properties will present properties in prime locations, each designed to offer a blend of luxury and comfort.

        </p>
      </div>
      <Image
        className="w-full xl:w-5/6 rounded-none xl:rounded-2xl object-cover text-center"
        src={section1}
        alt="second section image"
      />
           <div className="text-center mx-2 my-10 ">
        <h2 className="text-2xl font-bold text-customText  lg:text-3xl pb-4 custom-font">
        Dubai: A Global Haven for Luxury Living and Investment
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
        Dubai remains one of the safest and most secure cities to live in, making it an ideal destination for both personal residences and investment properties. With its global appeal, tax-free benefits, and ease of doing business, Dubai has long been recognized as a hub for investment. The city is known for its cutting-edge architecture, luxurious lifestyle, and unparalleled business opportunities. Moreover, Dubai&apos;s real estate market continues to show resilience and strong growth, making it an attractive investment destination for those seeking high returns.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
