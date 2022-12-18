import React from "react";

const Experiences = () => {
  return (
    <div id="skills" className="lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experiences
        </p>
        <h2 className="py-4">What I've done within my community</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8"></div>
      </div>
    </div>
  );
};

export default Experiences;
