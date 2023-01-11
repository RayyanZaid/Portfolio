import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import SkillsAndExpericnes from "../components/SkillsAndExperiences";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rayyan | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./api/portfolio/about.png" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsAndExpericnes />
    </div>
  );
}
