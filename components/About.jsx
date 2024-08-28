import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className=" tracking-widest uppercase text-black py-8">About</h1>

          <p className="py-2 text-black text-2xl">
            Hi! I'm Rayyan and I'm passionate about Web and Mobile App
            Development, particularly backend functionality and user data
            visualization. At my current internship, I use Datadog to create
            metrics and dashboards to monitor/visualize various integrations
            within our infrastructure. I also use Typescript with NodeJS to
            develop our Location Service.
          </p>

          <p className="py-2 text-black text-2xl">
            I've also been a lifelong teacher. I've combined my passion for
            teaching with Computer Science by working at Coding Minds Academy.
            As an instructor, I teach students Full-Stack Development with AI,
            USACO, Unity, and coding languages.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-black underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-yellow-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 md:hover:scale-110 ease-in duration-500">
          <img
            className="rounded-xl group-hover:opacity-10"
            src={"/portfolio/assets/about.png"}
            alt="/"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
