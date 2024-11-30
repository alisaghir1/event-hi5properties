import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute bg-transparent z-3 top-0 left-0 w-full z-50 border-b  bg-opacity-80 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image alt="image" className="block h-16 w-auto" src={logo} />
            </Link>
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            <a
              className="text-white font-mono bg-customText hover:bg-white hover:text-black inline-flex items-center justify-center px-3 py-2 border border-transparent font-semibold  text-md md:text-lg rounded-md shadow-smtransition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
              href="tel:+971545620057"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
