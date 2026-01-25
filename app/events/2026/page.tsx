"use client";

import Link from "next/link";
import Image from "next/image";
import Countdown from "../../components/countdown";

export default function CodeHers2026Page() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">

      {/* 1) Hero Section */}
      <div className="flex flex-col-reverse pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 md:flex-row mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            Code
            <b>
              <span className="text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
                Hers
              </span>
            </b>{" "}
            2026
          </h1>
          <h2 className="text-3xl font-bold lg:text-4xl xl:text-5xl text-text-800">
            Empowering <i><b>her</b></i> future.
          </h2>
          <p className="text-text-700 text-lg">
            Our annual flagship event is back! Join us for a day of empowering
            workshops, speaker panels, and hands-on coding sessions that bring
            together girls from schools across Hong Kong.
          </p>
          {/* Buttons */}
            <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative inline-flex items-center justify-center ease-out group">
                <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
                <Link
                  href="https://app.codehershk.org/register/"
                  className="relative top-0 inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                  target="_blank"
                >
                  Sign Up
                </Link>
              </div>

              <Link
                href="/events/2026/workshops"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all"
              >
                See Workshops
              </Link>

              <Link
                href="/events"
                className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
              >
                Other Events
              </Link>
          </div>
        </div>

        {/* Optional image or illustration on the right side */}
        <div className="flex-grow">
          {/* <Image src="/hero-image.jpg" alt="Hero illustration" fill className="object-cover" /> */}
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

      {/* 2) Event Details */}
      <div
        id="event-details"
        className="flex flex-col bg-secondary-500/20 p-6 md:p-8 space-y-6 rounded-xl lg:py-12 lg:px-20"
      >
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Event Details
        </h2>
        <div className="grow flex-col md:flex-row flex gap-6">
          {/* Left column: date/time, venue, cost, who */}
          <div className="md:w-1/2 flex-col space-y-6">
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Time &amp; Date
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
                22 Guildford Rd, The Peak, Hong Kong
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
              <p className="text-text-600 text-lg">A bus shuttle from Admiralty MTR Station will be provided</p>
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
          {/* Right column: Google Map */}
          <div className="grow md:w-1/2 lg:w-1/3 flex flex-col justify-center h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.3303479485435!2d114.15811397545195!3d22.265472779711693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404001349701291%3A0xce282525fd6674a8!2sGerman%20Swiss%20International%20School%20(The%20Peak%20Campus)%20Lower%20Building%2C%2022%20Guildford%20Rd%2C%20The%20Peak!5e0!3m2!1sen!2shk!4v1769348953311!5m2!1sen!2shk"
              className="w-full h-full md:h-2/3 lg:h-full rounded-xl"
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </div>


      {/* 3) Highlights Video + PDF Links */}
      <section className="w-full py-10 mx-auto space-y-6 text-center lg:py-16">
        <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
          CodeHers Highlights
        </h2>
        <p className="text-text-700 text-lg max-w-2xl mx-auto">
          Watch our highlights video from past events, and check out our 
          promotional files for more info.
        </p>

        {/* YouTube Embed (16:9 ratio) */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/zgT_fEx4XTk"
            title="CodeHers 2024 Highlights"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </section>

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
