"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Insta24 from "../../../components/embed24IG";


export default function Embed25Page() {
  // For timeline
  const timelineEvents = [
    { title: "Initial Interest Deadline", date: "February 25th" },
    { title: "Hackathon Launch", date: "February 27th" },
    { title: "Hackathon Submission Deadline", date: "March 13th" },
    { title: "Finalists Shortlist", date: "March 14th" },
    { title: "Live Finals", date: "March 15th (Award Ceremony)" },
  ];

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">

    {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          All 2024 Instagram Recap
        </h1>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        {/* Countdown in the middle */}
        <Insta24/>
        
      </div>
    
    </main>

     
  );
}
