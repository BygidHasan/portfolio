import React from "react";
import Link from "next/link";

export default function Links({ data }) {
  const { address, icon } = data;
  return (
    <span className="rounded-full border-2 border-transparent hover:border-gray-700 p-1.5">
      <Link href={address} target="_blank">
        {icon}
      </Link>
    </span>
  );
}
