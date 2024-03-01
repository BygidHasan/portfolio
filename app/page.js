import Image from "next/image";
import Link from "next/link";
import Contact from "./components/Contact";
import { VscGithub } from "react-icons/vsc";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { BiLogoFacebookCircle, BiLogoUpwork } from "react-icons/bi";

export default function Home() {
  const description = [
    {
      title: "Skill",
    },
  ];

  return (
    <main className="h-screen flex flex-col md:flex-row gap-4 bg-gray-950 p-5 text-white">
      <section className="flex flex-col gap-5 justify-between items-center w-full md:w-2/6 lg:w-1/4 border border-gray-700 rounded-md p-5 ">
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

        <div className="flex flex-col gap-4 justify-center items-start">
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
            <span className="rounded-full border-2 border-transparent hover:border-white p-1">
              <Link href={"https://github.com/BygidHasan"}>
                <VscGithub size={25} />
              </Link>
            </span>
            <span className="rounded-lg border-2 border-transparent hover:border-blue-700 p-1">
              <Link href={"https://www.linkedin.com/in/bygid-hasan/"}>
                <RxLinkedinLogo color="white" size={25} />
              </Link>
            </span>
            <span className="rounded-full border-2 border-transparent hover:border-blue-700 p-1">
              <Link href={"https://www.facebook.com/bygid.hasan/"}>
                <BiLogoFacebookCircle color="white" size={25} />
              </Link>
            </span>
            <span className="rounded-full border-2 border-transparent hover:border-green-700 p-1">
              <Link href={"https://www.upwork.com/freelancers/bygidhasan"}>
                <BiLogoUpwork color="white" size={25} />
              </Link>
            </span>
          </div>

          {/* dev links */}
          <div className="flex gap-5 mx-auto">
            <span className="rounded-full border-2 border-transparent hover:border-orange-500 p-1">
              <Link href={"https://leetcode.com/bygidHasan/"}>
                <SiLeetcode color="white" size={25} />
              </Link>
            </span>
            <span className="rounded-full border-2 border-transparent hover:border-green-700 p-1">
              <Link href={"https://www.linkedin.com/in/bygid-hasan/"}>
                <FaHackerrank color="white" size={25} />
              </Link>
            </span>
            <span className="rounded-full border-2 border-transparent hover:border-yellow-800 p-1">
              <Link href={"https://www.codechef.com/users/byg1d"}>
                <SiCodechef color="white" size={25} />
              </Link>
            </span>
            <span className="rounded-lg border-2 border-transparent hover:border-blue-700 p-1">
              <Link href={"https://codeforces.com/profile/MdBygidHasan"}>
                <SiCodeforces color="white" size={25} />
              </Link>
            </span>
          </div>

          {/* Contact */}
        </div>

        <Contact />
      </section>

      {/* description section */}
      <section className="w-full md:w-4/6 lg:w-3/4 border border-gray-700 rounded-md"></section>
    </main>
  );
}
