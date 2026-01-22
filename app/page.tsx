"use client";

import Link from "next/link";
import Image from "next/image";
import WorkshopsSection from "./components/WorkshopsSection";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import pics24 from "./components/pics24";
import "@splidejs/react-splide/css";
import Countdown from "../app/components/countdown";


export default function Home() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">
      <div className="flex flex-col lg:flex-row pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 mb-10">
        {/* Left Section - Title & Signup */}
        <div className="flex flex-col space-y-6 lg:space-y-12 lg:w-1/2">
          <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            Code
            <b>
              <span className="text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
                Hers
              </span>
            </b>
          </h1>
          <h2 className="text-3xl font-bold lg:text-4xl xl:text-5xl text-text-800">
            Empowering <i><b>her</b></i> future.
          </h2>

          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/about"
              className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://app.codehershk.org/register"
                className="relative top-0 inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Image Carousel */}
        <div className="lg:w-1/2">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 3000,
              arrows: true,
              pagination: true,
              speed: 800,
            }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            {pics24.map((img, index) => (
              <SplideSlide
                key={index}
                className="overflow-hidden h-[400px] w-[600px]"
              >
                <Image
                  src={img}
                  alt={img}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full overflow-hidden"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Mascot on the left */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/mascot26/mascot3.png" // Update with your actual mascot path
            alt="CodeHers Mascot 3"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Countdown in the middle */}
        <Countdown/>

        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/mascot26/mascot4.png" // Update with your actual mascot path
            alt="CodeHers Mascot 4"
            fill
            className="object-contain"
            priority
          />
        </div>
        
      </div>

      <div
        id="event-section"
        className="flex flex-col bg-secondary-500/20 p-6 md:p-8 space-y-6 rounded-xl lg:py-12 lg:px-20"
      >
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Event
        </h2>
        <div className="grow flex-col md:flex-row flex gap-6">
          <div className="md:w-1/2 flex-col space-y-6">
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Time & Date
              </h5>
              <p className="text-text-600 text-lg">
                Saturday 7th March 2026, 9:30am - 4:30pm
              </p>
            </div>
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Venue
              </h5>
              <p className="text-text-600 text-lg">
                German Swiss International School <br />
                11 Guildford Rd, The Peak, Hong Kong
              </p>
            </div>
             <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Cost
              </h5>
              <p className="text-text-600 text-lg">Free! Includes free lunch and merchandise!</p>
            </div>
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Transit
              </h5>
              <p className="text-text-600 text-lg">
                A bus shuttle from Admiralty MTR Station will be provided
              </p>
            </div>
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Who
              </h5>
              <p className="text-text-600 text-lg">
                Open to female or non-binary students from local and
                international schools (Year 7 / Grade 6 / P6 and above)
              </p>
            </div>
          </div>


          {/* Promotional Video Replaces Google Maps Embed */}
          <div className="grow md:w-1/2 lg:w-1/3 flex flex-col justify-center h-72 md:h-auto">
          <iframe 
            src="https://www.youtube.com/embed/4yTva9Ncbrs?si=2El9M9LyRe_G-rYP"
            title="Promotional video" 
              className="w-full h-full md:h-2/3 lg:h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <WorkshopsSection />

        <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
                 <h2 className="text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Hackathon
        </h2>
        <h5 className="block text-2xl leading-6 tracking-wide text-center text-text-800">
          Join the 2026 Hackathon for a chance to showcase your talents and passions in STEM and bring your ideas to life!
        </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://codehershk.org/events/2026/hackathon"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            Learn More
          </Link>
        </div>
      </div>



      <SchoolCredits />

      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Interested?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Sign up for the 2026 event now!
          </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://app.codehershk.org/register"
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

function SchoolCredits() {
  const partners = [
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

  return (
    <div className="flex flex-col items-center w-full py-10 space-y-12 md:py-16 h-full">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Partners
        </h1>
        <h5 className="block text-2xl leading-6 tracking-wide text-center text-text-800">
          Proudly organised by students from these schools
        </h5>
      </div>

      <div className="grid overflow-hidden w-full grid-cols-2 gap-3 px-8 py-6 rounded-lg lg:gap-1 bg-secondary-500/10 lg:h-32 justify-items-center md:grid-cols-3 lg:flex lg:flex-row lg:space-x-3 lg:items-center lg:justify-center xl:justify-around">
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
              rewind: false,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="School partners"
          className="overflow-hidden"
        >
          {[...partners, ...partners].map((partner, index) => (
            <SplideSlide key={index} className="flex items-center">
              <motion.div
                className="w-40 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center mx-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center p-2"
                >
                  <Image
                    src={partner.src}
                    alt="School logo"
                    width={160}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </Link>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
