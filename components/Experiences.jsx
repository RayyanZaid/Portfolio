import React from "react";
import ExperienceItem from "./ExperienceItem";
const Experiences = () => {
  return (
    <div id="skills" className="lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Jobs & Experiences
        </p>
        <h2 className="py-4">What I've done within my community</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceItem
            title="Kumon"
            backgroundImg="kumon.jpg"
            description="Lead Instructor and HR"
            timeframe="8/2020 --> 8/2022"
          />

          <ExperienceItem
            title="Coding Minds Academy"
            backgroundImg="codingminds.jpg"
            description="Project Developer"
            timeframe="12/2021 --> Current"
          />

          <ExperienceItem
            title="Summer Research"
            backgroundImg="research.jpg"
            description="Convolutional Neural Networks with Prof Jia Chen"
            timeframe="5/2022 --> 7/2022"
          />
          <ExperienceItem
            title="DCI"
            backgroundImg="dci.jpg"
            description="Funding Bangladeshi Children's Education"
            timeframe="8/2020 --> 8/2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
