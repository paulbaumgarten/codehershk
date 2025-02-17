"use client";

import Link from "next/link";
import { useId } from "react";

export default function HackathonPage() {
  // For timeline
  const timelineEvents = [
    { title: "Sign-ups Deadline", date: "February 25th" },
    { title: "Hackathon Launch", date: "February 27th" },
    { title: "Project Submission", date: "March 13th" },
    { title: "Finalists Shortlist", date: "March 14th" },
    { title: "Live Finals", date: "March 15th (Award Ceremony)" },
  ];

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">
      {/* HERO SECTION (Similar to homepage) */}
      <div className="flex flex-col-reverse pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 md:flex-row mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            Code
            <b>
              <span className="text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
                Hers
              </span>
            </b>{" "}
            Hackathon
          </h1>
          <p className="text-text-700 text-lg">
            Got a brilliant idea that can help girls and women around the world?
            Here’s your chance! From February 27th to March 13th, join (up to 5
            friends) or go solo, and put your coding chops to the test. Winners
            will be announced live on March 15th!
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://forms.gle/aPcWkbQxVxUh2GPj8"
                className="relative top-0 inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>

            <Link
              href="/events"
              className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Other Events
            </Link>
          </div>
        </div>
        {/* OPTIONAL: Put an image/graphic on the right */}
        <div className="flex-grow" />
      </div>

      {/* MAIN CONTENT SECTION */}
      <div
        id="hackathon-details"
        className="flex flex-col md:p-8 space-y-8 rounded-xl"
      >
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Overview
        </h2>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-text-900 mb-4">
            Key Dates &amp; Deadlines
          </h3>
          <p className="text-text-700 mb-4">
            Save these dates to stay on top of everything, from sign-ups to
            final presentations!
          </p>
          <div className="relative ml-6 border-l-2 border-primary-500 space-y-8">
            {timelineEvents.map((event) => (
              <div key={useId()} className="relative pl-8">
                <span
                  className="
                    absolute
                    -left-[0.62rem]
                    top-2
                    w-4 h-4
                    rounded-full
                    bg-primary-500
                    shadow
                  "
                />
                <h4 className="font-semibold text-text-900">{event.title}</h4>
                <p className="text-text-700">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisions & Criteria */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-900">Divisions</h3>
          <p className="text-text-700">
            We have two divisions, so everyone—newbies or coding pros—can
            participate:
          </p>
          <ul className="list-disc list-inside text-text-700 space-y-2">
            <li>
              <strong>Novice (Years 7–11):</strong> Perfect for those just
              starting out. Block-based coding (Scratch, etc.) is allowed. We’ll
              focus more on creative ideas and less on super-advanced code.
            </li>
            <li>
              <strong>Veteran (Open to all):</strong> Ready for a challenge?
              Show off your coding prowess—no block-based languages allowed. We
              lean heavier on technical implementation and advanced features.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-900">
            Judging Criteria
          </h3>
          <p className="text-text-700">
            Yes, we’re rating your work—but we promise, it’s all in good fun!
          </p>
          {/* Criteria Table or bullet points */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-text-700 border-collapse">
              <thead>
                <tr className="border-b border-text-300 bg-secondary-100">
                  <th className="p-3 text-left font-semibold text-text-900">
                    Criterion
                  </th>
                  <th className="p-3 text-left font-semibold text-text-900">
                    Novice Weight
                  </th>
                  <th className="p-3 text-left font-semibold text-text-900">
                    Veteran Weight
                  </th>
                  <th className="p-3 text-left font-semibold text-text-900">
                    What We’re Looking For
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Theme Relevance</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">
                    How well does your project address girls’ and women’s needs?
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Creativity</td>
                  <td className="p-3">20%</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">
                    Is it unique? Does it solve a problem in a fresh way?
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Technical Excellence</td>
                  <td className="p-3">20%</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">
                    Code quality, minimal bugs, intuitive UI, etc.
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Implementation</td>
                  <td className="p-3">20%</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">
                    How complete is the solution? Potential for growth?
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Presentation</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">20%</td>
                  <td className="p-3">
                    Pitch delivery, clarity, audience engagement, etc.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rules / More Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-900">Rules &amp; Extra Info</h3>
          <ul className="list-disc list-inside text-text-700 space-y-2">
            <li>
              AI Tools are allowed, but you must truly understand your code (no blindly copy-pasting).
            </li>
            <li>
              Original work is required, meaning no old projects. Everything
              should be created during the hackathon period.
            </li>
            <li>
              Teachers, parents, or mentors, anyone not in your group, can’t directly assist
              with coding or design. This is your time to shine!
            </li>
            <li>
              Provide a 10-minute video plus your code. Top teams present live on March 15th.
            </li>
            <li>
              Be respectful. We’re all here to learn &amp; collaborate. Harassment or offensive behavior isn’t tolerated.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA at bottom (like homepage's final section) */}
      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Ready to Hack?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Sign up now for the First CodeHers Hackathon!
          </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://forms.gle/aPcWkbQxVxUh2GPj8"
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
