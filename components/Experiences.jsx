import React from "react";
import ExperienceItem from "./ExperienceItem";
import autovolleyImg from "../public/assets/projects/autovolley.png";

const Experiences = () => {
  return (
    <div id="skills" className="lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experiences
        </p>
        <h2 className="py-4">What I've done within my community</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceItem
            title="AutoVolley"
            backgroundImg={autovolleyImg}
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />
          <ExperienceItem
            title="AutoVolley"
            backgroundImg={autovolleyImg}
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />
          <ExperienceItem
            title="AutoVolley"
            backgroundImg={autovolleyImg}
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />

          <ExperienceItem
            title="AutoVolley"
            backgroundImg={autovolleyImg}
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
