"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

type Partner = {
  src: string;
  href: string;
};

export default function PartnerPage() {
  const partners: Partner[] = [
    { src: "/school-logos/CIS on white.jpeg", href: "https://www.cis.edu.hk/" },
    { src: "/school-logos/GSIS.png", href: "https://www.gsis.edu.hk/en/" },
    { src: "/school-logos/HKIS.png", href: "https://www.hkis.edu.hk/" },
    { src: "/school-logos/Harrow on white.jpg", href: "https://www.harrowhongkong.hk/" },
    { src: "/school-logos/ISF.png", href: "https://academy.isf.edu.hk/" },
    { src: "/school-logos/KGV ESF version.png", href: "https://www.kgv.edu.hk/" },
    { src: "/school-logos/Kellett on white.jpg", href: "https://www.kellettschool.com/" },
    { src: "/school-logos/SIS-ESF-version.png", href: "https://www.sis.edu.hk/" },
    { src: "/school-logos/STC on transparent.png", href: "https://shatincollege.edu.hk/" },
    { src: "/school-logos/VSA.jpeg", href: "https://www.vsa.edu.hk/" },
    { src: "/school-logos/WIS esf.png", href: "https://www.wis.edu.hk/" },
  ];

  const infinitePartners = [...partners, ...partners];

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Partner With Us
        </h1>
        <p className="text-text-700 text-lg">
          Want to support CodeHers? Here are some ways you can get involved.
        </p>
      </section>

      <section className="bg-secondary-500/10 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-text-900 mb-4">
          Our Sponsors & Partners
        </h2>

        <Splide
          options={{
            type: "loop",
            drag: "free",
            autoWidth: true,
            gap: "10px",
            arrows: false,
            pagination: false, 
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
              pauseOnFocus: false,
            },
          }}
          extensions={{ AutoScroll }}
          className="overflow-hidden"
        >
          {infinitePartners.map((partner, index) => (
            <SplideSlide key={index}>
              <motion.div className="w-40 h-20 bg-white rounded-lg shadow flex items-center justify-center" whileHover={{ scale: 1.05 }}>
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={partner.src} 
                    alt="Partner logo"
                    width={80}
                    height={40}
                    style={{
                      width: "auto",
                      height: "70px",
                    }}
                    className="object-contain p-2"
                  />
                </Link>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      {/* 3) Grid of Partner Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PartnerCard
          title="Sponsor Our Events"
          description="Help fund workshops, prizes, or resources for participants."
        />
        <PartnerCard
          title="Host Workshops"
          description="Offer a coding workshop, panel, or talk to inspire students."
        />
        <PartnerCard
          title="Spread the Word"
          description="Use your network to amplify CodeHers events and mission."
        />
      </section>

      {/* 4) Contact / CTA Section */}
      <section className="pb-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">
          Have Another Idea?
        </h2>
        <p className="text-text-700 mb-4">
          We’re open to creative forms of support—get in touch:
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

function PartnerCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-2">
      <h3 className="text-xl font-semibold text-text-900">{title}</h3>
      <p className="text-text-600">{description}</p>
    </div>
  );
}
