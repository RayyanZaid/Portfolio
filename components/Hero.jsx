import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-black"> Rayyan Zaid</h1>

          <h1 className="py-8 text-black ">Full-Stack Developer</h1>
          <p className="py-8 text-black sm:max-w-[85%] m-auto">
            A full-stack developer with a focus on backend development and
            Artificial Intelligence
          </p>
          <div className="flex items-baseline justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/rayyan-zaid-7b0b35203/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn style={{ color: "black" }} />
              </div>
            </a>
            <a
              href="https://github.com/RayyanZaid"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub style={{ color: "black" }} />
              </div>
            </a>
            <a href="mailto:rayyanzaid0401@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail style={{ color: "black" }} />
              </div>
            </a>
            {/* <Link href="https://drive.google.com/file/d/1b8L5mNsv-WseKEMa66EgAQNuZql5fXgs/view?usp=sharing">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill style={{ color: "black" }} />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
