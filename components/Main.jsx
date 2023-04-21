import Image from "next/image";
import React from "react";
import memoji from "../public/assets/memoji.png";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center z-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center pt-14 sm:pt-16">
          <Image
            className="w-28 sm:w-36 py-5 drop-shadow-2xl"
            src={memoji}
            width={150}
            height={50}
            alt=""
          />
          <p className="uppercase text-[10px] sm:text-sm tracking-widest text-gray-600">
            {" "}
            "Let's do what we love and do a lot of it".  -  Marc Jacob{" "}
          </p>
          <h1 className="py-2 text-4xl sm:text-5xl text-gray-700">
            Hey, I'm <span className="text-[#9079d0]"> Tarushi </span>
          </h1>
          <h1 className="py-2 sm:py-4 text-3xl sm:text-5xl text-gray-700">
             UI/UX Designer
          </h1>
          <p className="py-2 text-gray-600 text-sm sm:text-base max-w-[90%] sm:max-w-[70%] m-auto">
            As a skilled UI/UX designer with expertise in Figma and Adobe XD,
            I bring a wealth of creativity and technical proficiency. With a keen eye for detail and a passion for
            crafting intuitive user experiences.
            Whether collaborating with cross-functional teams or working
            independently, I have consistently delivered designs that are both
            visually stunning and highly functional.
            I am adept at translating
            complex design briefs into polished, user-friendly interfaces for any organisation.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 space-x-2 sm:space-x-5">
            <Link href="https://www.linkedin.com/in/tarushi-srivastava-842699141">
              <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-blue-800 ease-in duration-200">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://instagram.com/_tarushi05_?igshid=Mzc1MmZhNjY">
              <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-pink-600 ease-in duration-200">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://www.behance.net/tarushisrivast2">
              <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-blue-600 ease-in duration-200">
                <FaBehance />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
