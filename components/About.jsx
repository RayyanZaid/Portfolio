import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! My name is Rayyan and I am a full-stack software developer. I
            have a strong foundation in computer science principles and have
            experience building/deploying web and mobile applications using a
            variety of programming languages and frameworks.
          </p>
          <p className="py-2 text-gray-600">
            In my free time, I enjoy playing and watching both basketball and
            volleyball, both competitively and recreationally. My love for these
            sports not only helps me stay active and healthy, but also enhances
            my ability to work collaboratively with others, think critically
            under pressure, and be creative in a professional environment.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-yellow-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 md:hover:scale-125 ease-in duration-300">
          <Image
            src={"../pages/portfolio/favicon.ICO"}
            className="rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
