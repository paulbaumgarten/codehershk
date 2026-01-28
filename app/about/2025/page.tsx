"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import StudentPics from "../../components/StudentPics2025";

/** Flip-card component using Framer Motion. */
function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);
  const handleClick = () => setFlipped(!flipped);

  return (
    <div
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow w-[260px] h-[260px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-[260px] h-[260px]"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT */}
          <motion.div
            className="absolute w-full h-full rounded-md"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image src={front} alt="Front" fill className="object-contain" />
          </motion.div>

          {/* BACK */}
          <motion.div
            className="absolute w-full h-full rounded-md"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image src={back} alt="Back" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          2025 Team
        </h1>
        <p className="text-text-700 text-lg">
        CodeHers 2025 was organised by a team of girls from 11 different schools across Hong Kong brought together by our passion for technology.
        </p>
      </section>

      {/* Our Team Section: side-by-side on md+ screens */}
      <section className="bg-secondary-500/10 p-6 rounded-xl shadow flex flex-col md:flex-row gap-3 items-start">
        {/* Left side text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-800">Our Team</h2>
          <p className="text-text-600">
            Scroll through our carousel to see the faces behind CodeHers for 2025! Hover (or tap on mobile) to flip each card and reveal the back side.
          </p>
        </div>

      </section>



<div className="w-full max-w-[2000px] mx-auto p-8">
  <div className="grid grid-cols-3 gap-5">
    {StudentPics.map((pic, idx) => (
      <div key={idx} className="">
        {/* Make sure FlipCard component fills its container */}
        <div className="w-full h-full">
          <FlipCard front={pic.front} back={pic.back} />
        </div>
      </div>
    ))}
  </div>
</div>

   

    </main>
  );
}
