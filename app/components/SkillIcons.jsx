"use client";

import { useState } from "react";

export default function SkillIcons({ data }) {
  const [onHover, setOnHover] = useState(false);
  const { tooltip, icon } = data;

  return (
    <div className="relative">
      <span
        className={`absolute bg-black border border-gray-700 rounded-md px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
          onHover ? "block" : "hidden"
        }`}
      >
        {tooltip}
      </span>
      <span
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        {icon}
      </span>
    </div>
  );
}
