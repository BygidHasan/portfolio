"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FaJava } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaHackerrank } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { BiLogoFacebookCircle, BiLogoUpwork } from "react-icons/bi";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs, TbBrandRedux } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiSpring,
} from "react-icons/si";

import Card from "./components/Card";
import Links from "./components/Links";
import SkillIcons from "./components/SkillIcons";
import Achievement from "./components/Achievement";

export default function Home() {
  const iconData = [
    {
      tooltip: "JavaScript",
      icon: <RiJavascriptFill color={"yellow"} size={40} />,
    },
    {
      tooltip: "TailwindCSS",
      icon: <SiTailwindcss color={"#06b6d4"} size={40} />,
    },
    {
      tooltip: "ReactJS",
      icon: <RiReactjsLine color={"#61DBFB"} size={40} />,
    },
    {
      tooltip: "NextJS",
      icon: <TbBrandNextjs color={"white"} size={40} />,
    },
    {
      tooltip: "Redux-toolkit",
      icon: <TbBrandRedux color={"#764abc"} size={40} />,
    },
    {
      tooltip: "NodeJS",
      icon: <TbBrandNodejs color={"#3c873a"} size={40} />,
    },
    {
      tooltip: "ExpressJS",
      icon: <SiExpress color={"white"} size={40} />,
    },
    {
      tooltip: "MongoDB",
      icon: <SiMongodb color={"#4DB33D"} size={40} />,
    },
    {
      tooltip: "Firebase",
      icon: <SiFirebase color={"#F57C00"} size={40} />,
    },
    {
      tooltip: "Java",
      icon: <FaJava color={"#5382a1"} size={40} />,
    },
    {
      tooltip: "Spring",
      icon: <SiSpring color={"#4DB33D"} size={40} />,
    },
    {
      tooltip: "MySQL",
      icon: <SiMysql color={"#00758F"} size={40} />,
    },
  ];
  const socialLinks = [
    {
      address: "https://github.com/BygidHasan",
      icon: <VscGithub size={25} />,
    },
    {
      address: "https://www.linkedin.com/in/bygid-hasan/",
      icon: <RxLinkedinLogo color="#0072b1" size={25} />,
    },
    {
      address: "https://www.facebook.com/bygid.hasan/",
      icon: <BiLogoFacebookCircle color="#316FF6" size={25} />,
    },
    {
      address: "https://www.upwork.com/freelancers/bygidhasan",
      icon: <BiLogoUpwork color="#73bb44" size={25} />,
    },
  ];
  const devLinks = [
    {
      address: "https://leetcode.com/bygidHasan/",
      icon: <SiLeetcode color="#ffc117" size={25} />,
    },
    {
      address: "https://www.hackerrank.com/profile/bygidhasan6",
      icon: <FaHackerrank color="#73bb44" size={25} />,
    },
    {
      address: "https://www.codechef.com/users/byg1d",
      icon: <SiCodechef color="#d46c26" size={25} />,
    },
    {
      address: "https://codeforces.com/profile/MdBygidHasan",
      icon: <SiCodeforces color="#387ADF" size={25} />,
    },
  ];
  const projects = [
    {
      title: "EnToDo",
      icons: [
        <RiJavascriptFill key={0} color={"yellow"} size={30} />,
        <TbBrandNextjs key={1} color={"white"} size={30} />,
        <SiTailwindcss key={2} color={"#06b6d4"} size={30} />,
        <TbBrandRedux key={3} color={"#764abc"} size={30} />,
      ],
      description: "Not just a Todo app, but a project manager",
      liveLink: "https://enhanced-todo.vercel.app/",
      codeLink: "https://github.com/BygidHasan/Enhanced-Todo",
    },
    {
      title: "Dua-IRD",
      icons: [
        <RiJavascriptFill key={0} color={"yellow"} size={30} />,
        <TbBrandNextjs key={1} color={"white"} size={30} />,
        <SiTailwindcss key={2} color={"#06b6d4"} size={30} />,
        <TbBrandRedux key={3} color={"#764abc"} size={30} />,
      ],
      description: "A dashboard made by hadith API calling",
      liveLink: "https://dua-ruqyah-ird.vercel.app/",
      codeLink: "https://github.com/BygidHasan/dua-ruqyah-ird",
    },
    {
      title: "SolarSystem",
      description: "A roating solar sysem made on university, with C language",
      liveLink: null,
      codeLink: "https://github.com/BygidHasan/Solar-System-Project-in-C",
    },
  ];
  const experiences = [
    {
      title: "Peters PTE",
      icons: [
        <RiJavascriptFill key={0} color={"yellow"} size={30} />,
        <TbBrandNextjs key={1} color={"white"} size={30} />,
        <SiTailwindcss key={2} color={"#06b6d4"} size={30} />,
        <TbBrandRedux key={3} color={"#764abc"} size={30} />,
      ],
      exp: { duration: "1 Jan - present", location: "Remote" },
      description: "Worked as a Front-End Engineer",
      liveLink: "https://enhanced-todo.vercel.app/",
      codeLink: null,
    },
  ];
  const education = [
    {
      title: "Daffodil International University",
      exp: {
        duration: "Jan 2019 - Dec 2022",
        location: "Ashulia, Savar, Dhaka",
      },
      description: "BSc in Software engineering",
      gpa: "3.89",
    },
    {
      title: "Rajshahi Education Board Model School & College",
      exp: {
        duration: "Jan 2016 - Dec 2017",
        location: "Rajshahi Sadar, Rajshahi",
      },
      description: "HSC in Science",
      gpa: "5.00",
    },
    {
      title: "Shaplakali Ideal Secondary School and College",
      exp: {
        duration: "Jan 2014 - Dec 2015",
        location: "Jibannagar, Chuadanga",
      },
      description: "SSC in Science",
      gpa: "5.00",
    },
  ];
  const achievements = [
    {
      title: "Problem Solving (Basic) certificate from HackerRank",
      link: "https://www.hackerrank.com/certificates/166f998b52c0",
    },
    {
      title: "Ranked 9th in DIU Kick Start Programming Contest",
      link: null,
    },
    {
      title: "Solved Over 100+ problems on given online judges",
      link: null,
    },
    {
      title: "Executive member at DIU Data Science Club",
      link: null,
    },
  ];

  return (
    <main className="h-screen flex flex-col md:flex-row gap-10 bg-gray-950 p-5 text-white overflow-auto md:overflow-hidden">
      <section className="flex flex-col gap-5 md:gap-14 justify-between md:justify-center items-center w-full md:w-2/6 lg:w-1/4 border border-gray-700 rounded-md p-5 ">
        {/* image here */}
        <Image
          className="rounded-full border border-gray-700 p-3"
          src={"/my_img.png"}
          alt="myImage"
          layout="respopnsive"
          width={250}
          height={250}
          objectFit="cover"
        />

        <div className="flex flex-col gap-3 justify-center items-start">
          {/* name and title */}
          <div className="flex flex-col gap-2">
            <p className="mx-auto text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
              MD Bygid Hasan
            </p>
            <p className="text-center font-light text-sm text-gray-400 italic">
              A programmer, A developer, A problem solver and A team worker
            </p>
          </div>
          {/* social links */}
          <div className="flex gap-5 mx-auto">
            {socialLinks.map((link, i) => (
              <Links key={i} data={link} />
            ))}
          </div>

          {/* dev links */}
          <div className="flex gap-5 mx-auto">
            {devLinks.map((link, i) => (
              <Links key={i} data={link} />
            ))}
          </div>

          {/* Contact */}
        </div>
        <p className="text-right font-light text-sm italic text-gray-400">
          Contact Me Through my Social Media
        </p>
      </section>

      {/* description section */}
      <section className="flex flex-col w-full md:w-4/6 lg:w-3/4 gap-5 md:pr-5 md:overflow-auto">
        {/* skills */}
        <div className="flex flex-col w-full border border-gray-700 rounded-lg px-5 py-3 ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium">Skills</p>
          <hr className="my-3" />
          <div className="flex flex-wrap gap-5 scroll">
            {iconData.map((icon, i) => (
              <SkillIcons key={i} data={icon} />
            ))}
          </div>
        </div>

        {/* experience */}
        <div className="flex flex-col w-full border border-gray-700 rounded-lg px-5 py-3 ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            Experiences
          </p>
          <hr className="my-3" />
          <div className="flex flex-grow gap-5 overflow-auto scroll">
            {experiences.map((experience, i) => (
              <Card key={i} data={experience} />
            ))}
          </div>
        </div>

        {/* projects */}
        <div className="flex flex-col w-full border border-gray-700 rounded-lg px-5 py-3 ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium">Projects</p>
          <hr className="my-3" />
          <div className="flex flex-grow gap-5 overflow-auto scroll">
            {projects.map((project, i) => (
              <Card key={i} data={project} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col w-full border border-gray-700 rounded-lg px-5 py-3 ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            Education
          </p>
          <hr className="my-3" />
          <div className="flex flex-grow gap-5 overflow-auto scroll">
            {education.map((edu, i) => (
              <Card key={i} data={edu} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-col w-full border border-gray-700 rounded-lg px-5 py-3 ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            Achievements
          </p>
          <hr className="my-3" />
          <div className="flex flex-wrap gap-5 scroll">
            {achievements.map((achievement, i) => (
              <Achievement key={i} data={achievement} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
