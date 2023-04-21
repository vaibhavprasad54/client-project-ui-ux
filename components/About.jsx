import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import figma from "../public/assets/figma.png";
import adobexd from "../public/assets/adobexd.png";
import photoshop from "../public/assets/photoshop.png";
import canva from "../public/assets/canva.png";
import illustrator from "../public/assets/illustrator.png";
import html from "../public/assets/html5.png";


const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 sm:px-10"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-7 sm:p-2">
          <h2>About</h2>
          <p className="py-4 text-gray-600 text-sm sm:text-base">
          With one year of experience in marketing and branding, I have gained valuable skills in user research, brainstorming sessions, and product design. As a self-taught UI/UX designer, I have developed strong problem-solving skills and adaptability. I have a passion for learning and am eager to try new technologies, making me a valuable addition to any marketing or branding team.
          </p>

          <div className="">
            <p className="font-semibold text-xl pb-5">Skills</p>
            <div className="flex items-center justify-center space-x-8 border overflow-x-auto border-gray-400 py-12 mb-7 rounded-md shadow-lg scrollbar scrollbar-thin scrollbar-thumb-slate-500">
              <Image
                src={figma}
                title="Figma"
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={adobexd}
                title="AdobeXD"
                className="cursor-pointer"
                width={55}
                height={55}
                alt=""
              />
              <Image
                src={illustrator}
                title="Adobe Illustrator"
                className="cursor-pointer"
                width={60}
                height={60}
                alt=""
              />
              <Image
                src={canva}
                title="Canva"
                className="cursor-pointer"
                width={60}
                height={60}
                alt=""
              />
              <Image
                src={html}
                title="HTML"
                className="cursor-pointer"
                width={60}
                height={60}
                alt=""
              />
              <Image
                src={photoshop}
                title="Photoshop"
                className="cursor-pointer"
                width={60}
                height={60}
                alt=""
              />
              
            </div>
          </div>

          <Link href="../assets/resumeTarushi.pdf" locale={false}>
            <button
              className="p-3 text-base sm:text-lg px-4 flex items-center justify-center bg-[#846dc2] hover:bg-[#7962ba] rounded-[4px]">
              Resume
              <FaDownload className="ml-2" />
            </button>
          </Link>

        </div>
        <div className="p-2 px-7 sm:px-2">
          <img
            className="rounded-md hover:scale-105 ease-in duration-200 sm:w-[435px] sm:h-[435px]"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
