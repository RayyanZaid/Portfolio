import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className=" tracking-widest uppercase text-[#5651e5] py-8">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="AutoVolley"
            backgroundImg="autovolley.png"
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />
          <ProjectItem
            title="UCR ACM Membership Portal"
            backgroundImg="membershipPortal.jpg"
            projectUrl="https://github.com/acm-ucr/membership-portal"
            tech="Next JS, Tailwind CSS, Firestore"
          />
          <ProjectItem
            title="vJKRR Airlines"
            backgroundImg="airline.jpg"
            projectUrl="https://github.com/cs100/final-project-kguli003-jyee048-rlee204-rzaid003"
            tech="QT & c++"
          />
          <ProjectItem
            title="Golf Posture AI"
            backgroundImg="golf.jpg"
            projectUrl="https://probable-asparagus-426.notion.site/Golf-Posture-Project-Github-Links-ced502a4d1d34d699f1d407bee5cd45f"
            tech="Python (Flask Server and sklearn), Dart, & Firebase Storage"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
