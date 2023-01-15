import React from "react";
import Link from "next/link";
import Image from "next/image";
const ExperienceItem = ({ title, backgroundImg, description, timeframe }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={`/portfolio/assets/experiences/${backgroundImg}`}
        alt="/"
      ></img>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xs pb-1 pt-1 md:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-1 pt-1 text-xs text-white text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
