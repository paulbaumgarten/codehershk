"use client";
import { useState } from "react";

export default function Accordion({
  title,
  content,
  index,
  author,
  category,
  location
}: {
  title: string;
  content: string;
  index: number;
  author: string;
  category: string;
  location: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const handleToggle = (i: number) => {
    active === index ? setActive(null) : setActive(i);
  };

  return (
    <div className="py-3 px-3">
      <h2>
        <button
          className="flex text-text-800 items-center justify-between w-full text-left font-semibold py-2"
          onClick={() => handleToggle(index)}
        >
          <span>
            {title}{" "}
            <span className={`px-2 text-xs rounded-full ${category=="Intermediate" && 'text-blue-600 bg-blue-200'} ${category=="Advanced" && 'text-purple-600 bg-purple-200'} ${category=="Beginner" && 'text-emerald-600 bg-emerald-200'} ${category=="No coding" && 'text-zinc-600 bg-zinc-200'} `}>
              {category}
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-primary-500 shrink-0 ml-8 w-5 h-5 ${
              active && "!rotate-180"
            }`}
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 328l144-144 144 144"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`grid text-sm text-secondary-500 overflow-hidden transition-all duration-300 ease-in-out ${
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-3 text-justify">{content}</p>
          <p className="font-medium text-secondary-300"><strong>By:</strong> {author}</p>
          {location != '' && <p className="font-medium text-secondary-300"><strong>Room:</strong> {location}</p>}
        </div>
      </div>
    </div>
  );
}
