import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">My Strengths</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/react.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/sql.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden ">
                <h3>Azure SQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 pr-6 pt-4"
                  src={`/portfolio/assets/skills/ml.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>Python ML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 pr-6 pt-4 pb-2"
                  src={`/portfolio/assets/skills/firebase.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/cpp_logo.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>c++</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/flutter.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>Dart</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/ec2.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>AWS EC2</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="min-w-[64px] rounded-xl group-hover:opacity-10 md: pr-6 pt-4"
                  src={`/portfolio/assets/skills/docker.png`}
                  alt="/"
                ></img>
              </div>
              <div className="md:flex flex-col items-center justify-center hidden">
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
