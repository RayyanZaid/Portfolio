import React, { useState } from "react";

import Skills from "./Skills";
import Experiences from "./Experiences";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SkillsAndExpericnes = () => {
  const [onSkills, setPage] = useState(true);

  const handleClick = () => {
    setPage(!onSkills);
  };

  return (
    <div className=" items-center justify-center flex">
      <button
        onClick={handleClick}
        className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-[5%]"
      >
        <FaArrowLeft />
      </button>

      {onSkills ? <Skills /> : <Experiences />}

      <button
        onClick={handleClick}
        className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-[5%]"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SkillsAndExpericnes;
