import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [onNav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!onNav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-r from-cyan-500 to-purple-500 ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-8">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="120"
          height="100"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Home
              </li>
            </Link>

            <li className="ml-10 text-sm uppercase hover:border-b font-bold">
              <Link href="/#about">About</Link>
            </li>

            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Contact
              </li>
            </Link>
          </ul>

          {/* Keeps the 3 bars hidden on non-mobile devices */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          onNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 "
            : ""
        }
      >
        <div
          className={
            onNav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-[100%] items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                alt="/"
                width="85"
                height="35"
              />

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <h2 className="w-[85%] md:w-[90%] py-4 font-bold text-[#575fd5]">
                Feel free to explore!
              </h2>
            </div>
          </div>

          <div className="py-4 ">
            {/* For the menu */}
            <ul>
              <Link href="">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link
                href=""
                onClick={() =>
                  window.scrollTo({
                    top: document.querySelector("#about").offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>

              <Link
                href=""
                onClick={() =>
                  window.scrollTo({
                    top: document.querySelector("#skills").offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                <li className="py-4 text-sm">Skills</li>
              </Link>

              <Link
                href=""
                onClick={() =>
                  window.scrollTo({
                    top: document.querySelector("#projects").offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                <li className="py-4 text-sm">Projects</li>
              </Link>

              <Link href="">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-purple-700">
                Let's Connect
              </p>

              {/* For the icons */}

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
