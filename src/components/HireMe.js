import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { mail } from "@/data";
const HireMe = () => {
  return (
    <div className="absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-2 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-20">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href={`mailto:${mail}`}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 
          -translate-y-1/2 bg-dark text-light shadow-md border border-soild border-dark 
          w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
          hover:dark:text-light hover:dark:border-light md:w-10 md:h-10 md:text-[8px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
