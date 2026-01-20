"use client";

import Link from "next/link";
import Image from "next/image";
import Countdown from "../../../components/countdown";

export default function CodeHers2026Page() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">

      {/* 1) Hero Section */}
      <div className="flex flex-col-reverse pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 md:flex-row mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          {/* <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            More information coming soon...
          </h1> */}
        <h2 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
        2026 Workshops
         </h2>
          <h3 className="text-3xl font-bold  text-text-800">
            More information coming soon...
          </h3>


        </div>


      </div>

      {/* Countdown with Mascot */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Mascot on the left */}
        
        {/* Countdown in the middle */}
        <Countdown />

        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/mascot26/mascot2.png" // Update with your actual mascot path
            alt="CodeHers Mascot 2"
            fill
            className="object-contain"
            priority
          />
        </div>
        
      </div>




      {/* 4) Final CTA */}
      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Interested?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Sign up for CodeHers 2026 now!
          </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://app.codehershk.org"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </main>
  );
}
