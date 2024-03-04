import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBusinessTimeSolid } from "react-icons/lia";

export default function Card({ data }) {
  const { title, icons, exp, description, liveLink, codeLink, gpa } = data;
  return (
    <div className="flex flex-col justify-between gap-4 min-w-full md:min-w-96 border border-gray-700 rounded-lg p-3 mb-3">
      <div className="flex justify-between items-center gap-5">
        <p className="text-lg lg:text-xl font-medium">{title}</p>
        <div className="flex gap-1.5">
          {icons?.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
      </div>
      {exp && (
        <div className="flex justify-between items-center">
          <p className="flex gap-1 text-gray-400 text-sm">
            <LiaBusinessTimeSolid color={"gray"} size={18} />
            {exp.duration}
          </p>
          <p className="flex gap-1 text-gray-400 text-sm">
            <FaLocationDot color={"gray"} size={18} /> {exp.location}
          </p>
        </div>
      )}
      <p className="text-sm">{description}</p>
      <div className="flex gap-5">
        {liveLink && (
          <Link
            className="border border-gray-700 hover:border-emerald-700 hover:bg-emerald-700 px-2 py-1 rounded-md"
            href={liveLink}
            target="_blank"
          >
            Open
          </Link>
        )}
        {codeLink && (
          <Link
            className="border border-gray-700 hover:border-amber-700 hover:bg-amber-700 px-2 py-1 rounded-md"
            href={codeLink}
            target="_blank"
          >
            Code
          </Link>
        )}
        {gpa && (
          <p className="text-gray-400">
            <span className="text-sm text-white font-medium">Result:</span>{" "}
            {gpa} {`(out of ${Math.ceil(gpa)}.00)`}
          </p>
        )}
      </div>
    </div>
  );
}
