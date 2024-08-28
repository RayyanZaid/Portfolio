import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto px-2 py-16" style={{ maxWidth: "80%" }}>
        <h1 className=" tracking-widest uppercase text-black py-8">Projects</h1>

        <div className="grid md:grid-cols-2 gap-16">
          <ProjectItem
            title="UCR PathFinder"
            backgroundImg="PathFinder.png"
            projectUrl="https://docs.google.com/document/d/1EQnEVrJw4bI2_foKyHaP2bDTgL2tzG-MBFllJenfgRY/edit?usp=sharing"
            tech="React Native (Javascript)"
          />
          <ProjectItem
            title="AutoVolley"
            backgroundImg="autovolley.png"
            projectUrl="https://probable-asparagus-426.notion.site/AutoVolley-Fair-Team-Generator-4cf1e7b6665148428b93e0cba2ac7573"
            tech="Available on the App Store!!"
          />
          <ProjectItem
            title="AI Fitness Tracker"
            backgroundImg="AI Fitness Tracker.jpg"
            projectUrl="https://apps.apple.com/hr/app/ai-fitness-tracker/id6464535305"
            tech="Python (Image Classifier), Dart"
          />
          <ProjectItem
            title="MelodyMetrics"
            backgroundImg="melodymetrics.png"
            projectUrl="https://youtu.be/FporKnT6By0"
            tech="Python, React, Jetson Nano"
          />
          <ProjectItem
            title="UCR ACM Membership Portal"
            backgroundImg="membershipPortal.jpg"
            projectUrl="https://github.com/acm-ucr/membership-portal"
            tech="Next JS, Tailwind CSS, Firestore"
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
