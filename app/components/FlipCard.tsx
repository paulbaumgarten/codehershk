"use client";

import { useState } from "react";

export default function FlipCard({
  title,
  frontContent,
  backContent,
}: {
  title: string;
  frontContent: string;
  backContent: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective w-full h-40 rounded-xl shadow-lg relative cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl text-center backface-hidden transition-transform duration-500 p-4 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <h3 className="text-lg font-bold text-primary-600 mb-2">{title}</h3>
        <p className="text-text-600">{frontContent}</p>
      </div>

      {/* Back */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-primary-50 rounded-xl text-center backface-hidden transition-transform duration-500 rotate-y-180 p-4 ${
          flipped ? "rotate-y-0" : ""
        }`}
      >
        <h4 className="text-lg font-bold text-primary-600 mb-2">{title}</h4>
        <p className="text-text-700">{backContent}</p>
      </div>
    </div>
  );
}
