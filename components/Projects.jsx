import Image from "next/image";
import React from "react";
import Link from "next/link";
import isopure from "../public/assets/one.png"
import movie from "../public/assets/two.png"
import rent from "../public/assets/three.png"
import humane from "../public/assets/four.png"
import nektar from "../public/assets/five.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-7 sm:px-2 py-16">
        <h2 className="py-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
          
          <ProjectItem title='Isopure Homepage Design' desc='Figma, Photoshop' backgroundImg={isopure} projectUrl="https://www.behance.net/gallery/168794093/Isopure-Homepage-Redesign" />
          <ProjectItem title='Movie Ticket Booking Design' desc='Figma, Miro, Photoshop' backgroundImg={movie} projectUrl="https://www.behance.net/gallery/166240055/Movie-Booking-Mobile-app-Case-Study" />
          <ProjectItem title='Rent Home Web-app Design' desc='AdobeXD, Miro, Photoshop' backgroundImg={rent} projectUrl="https://www.behance.net/gallery/167330761/Rent-Homes-UIUX-Case-Study" />
          <ProjectItem title='Humane Moodboard' desc='' backgroundImg={humane} projectUrl="https://www.behance.net/gallery/165849065/Humane-Wellness-Brandbook" />
          <ProjectItem title='Nektar Moodboard' desc='' backgroundImg={nektar} projectUrl="https://www.behance.net/gallery/165851701/Nektar-Outdoor-Clothing-Brandbook" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
