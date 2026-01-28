"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import ManualInstagramFeed from "../../components/team24";



export default function AboutPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          2024 Team
        </h1>
        <p className="text-text-700 text-lg">
        CodeHers 2024 was organised by a team of girls from 11 different schools across Hong Kong brought together by our passion for technology.
        </p>
      </section>

      {/* Our Team Section: side-by-side on md+ screens */}
      <section className="bg-secondary-500/10 p-6 rounded-xl shadow flex flex-col md:flex-row gap-3 items-start">
        {/* Left side text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-800">Our Team</h2>
          <p className="text-text-600">
            Scroll through our Instagram post to see the faces behind CodeHers 2024!
          </p>
        </div>

      </section>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        <ManualInstagramFeed/>
        
      </div>


   

    </main>
  );
}

