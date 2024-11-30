import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBg font-mono flex flex-col text-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl flex items-center justify-center flex-col gap-5">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <Image width={300} src={logo} alt="logo" className="p-5" />
          </a>
          <Link href='/terms-of-use' className="text-white text-xl hover:text-customText transition 300 ease-in-out">Terms of use</Link>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-white font-medium text-center">
          © 2024 High Five Properties. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
