import React from "react";
import ExperienceItem from "./ExperienceItem";
const Experiences = () => {
  return (
    <div id="skills" className="lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-black">
          Jobs & Experiences
        </p>
        <h2 className="py-4 text-black">What I've done within my community</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceItem
            title="Kumon: After School Math & Reading Programs"
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
            title="Google CSR REU"
            backgroundImg="research.png"
            description="Under Professor Jia Chen. Researched Computer Vision and Time Series Analysis in basketball"
            timeframe="7/2023 --> 11/2023"
          />
          <ExperienceItem
            title="Heros For All"
            backgroundImg="herosForAll.png"
            description="Funding Camp Abilities Bangaldesh"
            timeframe="8/2023 --> Present"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
