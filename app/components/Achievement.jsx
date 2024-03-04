import Link from "next/link";
import React from "react";

import { GoDotFill } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";

export default function Achievement({ data }) {
  const { title, link } = data;
  return (
    <div className="w-full flex justify-start items-center">
      <p className="flex gap-2 justify-start items-center">
        <GoDotFill />
        {title}
      </p>
      {link && (
        <Link className="pl-4" href={link} target="_blank">
          <FiExternalLink color="cyan" size={20} />
        </Link>
      )}
    </div>
  );
}
