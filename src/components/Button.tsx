import React, { FC } from "react";

export const Button: FC = () => (
  <a
    href="#top"
    className="w-[50px] h-[50px] rounded-full bg-gray-300 hover:bg-gray-400 transition-all text-gray-900 fixed bottom-4 right-4 shadow-md"
  >
    <svg
      className="flex-shrink-0 size-8 absolute right-[0.6rem] top-[0.4rem] rotate-[-90deg]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </a>
);
