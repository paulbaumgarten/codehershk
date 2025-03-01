"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HackathonPage() {
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
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Submit Work Button */}
          <Link
            href="/hackathon/submit"
            className="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500 hover:bg-primary-600 transition-all"
          >
            Submit Work
          </Link>

          {/* Hackathon PDF Button */}
          <Link
            href="/hackathon/HackathonIntroduction.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all"
          >
            View Hackathon Guide
          </Link>
          
          {/* Other Events Button */}
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center bg-secondary-100 text-text-700 rounded-lg hover:bg-secondary-200 transition-all"
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

      {/* Theme Section */}
      <div className="space-y-6 mb-7">
        <h3 className="text-2xl font-bold text-text-900">Theme</h3>
        <p className="text-text-700">
          This year's overarching theme focuses on developing innovative apps or technology tools that enhance the lives of girls and women, addressing gaps overlooked by major tech companies.
        </p>

        {/* Sub-themes */}
        <h4 className="text-xl font-semibold text-text-900">Sub-themes</h4>
        <p className="text-text-700">
          Beneath the overarching theme of female empowerment, participants are encouraged to align their projects with one or more of the following sub-themes:
        </p>

        {/* Education */}
        <div className="bg-secondary-500/10 p-4 rounded-lg shadow">
          <h5 className="text-lg font-semibold text-text-900">Education</h5>
          <p className="text-text-700">
            Create a tool that makes education more accessible for girls and women. 
            </p>
            <p className="text-text-700 mt-1">
            <strong>Example projects:</strong>
          </p>
          <ul className="list-disc list-inside text-text-700 mt-2 space-y-1">
            <li>An offline learning app for girls in areas with limited internet access.</li>
            <li>A platform connecting girls with female mentors in STEM.</li>
            <li>A gamified app to teach coding or science to young girls.</li>
          </ul>
        </div>

        {/* Sustainability and Environment */}
        <div className="bg-secondary-500/10 p-4 rounded-lg shadow">
          <h5 className="text-lg font-semibold text-text-900">Sustainability and Environment</h5>
          <p className="text-text-700">
            Build a product that helps women adopt sustainable practices or lead eco-friendly initiatives. 
            </p>
            <p className="text-text-700 mt-1">
            <strong>Example projects:</strong>
          </p>
          <ul className="list-disc list-inside text-text-700 mt-2 space-y-1">
            <li>A platform for women to share tips on sustainable living.</li>
            <li>An app that connects women with local eco-friendly businesses.</li>
            <li>A tool to help women start green businesses or projects.</li>
          </ul>
        </div>

        {/* Community Building */}
        <div className="bg-secondary-500/10 p-4 rounded-lg shadow">
          <h5 className="text-lg font-semibold text-text-900">Community Building</h5>
          <p className="text-text-700">
            Design a product that connects women with like-minded individuals or communities. 
            </p>
            <p className="text-text-700 mt-1">
            <strong>Example projects:</strong>
          </p>
          <ul className="list-disc list-inside text-text-700 mt-2 space-y-1">
            <li>A social platform for women entrepreneurs to collaborate.</li>
            <li>A networking app for women in specific industries.</li>
            <li>A local event finder for women’s empowerment workshops.</li>
          </ul>
        </div>
      </div>

        
      {/* Submission Section */}
        <div>
          <h3 className="text-2xl font-bold text-text-900 mb-4">
            Submission
          </h3>
          <p className="text-text-700 mb-4">
            Once you've finished making your project and presentation, you should make a 10-minute long video with narration to both demonstrate your project and show off your presentation. You'll be submitting both this video and an <strong>accessible</strong> link to your codebase <i>(we recommend all participants to use <Link href="https://github.com/" className="text-primary-500 underline hover:text-primary-600">GitHub</Link> to store their code)</i> so we can run and review your code. Make sure to show passion and engagement in your presentation!
          </p>
        </div>

      <section className="pb-4">
        <h2 className="text-2xl font-bold text-text-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col space-y-2">
          <FAQItem
            question="Who can join the hackathon?"
            answer="Any high-school HK student passionate about women empowerment and tech is welcome!"
          />
          <FAQItem
            question="Do I need prior coding experience?"
            answer="Depending on the division you select, you'll only need to know enough to build a small project. Note AI is allowed to help you build your project!"
          />
          <FAQItem
            question="Is it okay if I still submit my project despite not filling in the initial interest form?"
            answer="That's perfectly fine! We're only using that form to gain insight on who's interested initially. As long as you submit your project on time, we will consider it as a fair candidate and will judge fairly."
          />
          <FAQItem
            question="What if there are extenuating circumstances affecting my performance and final submission?"
            answer="No worries, that is completely understandable. If this is the case, please contact us immediately at codehershk@gmail.com to make your case and we will judge you as fair as possible!"
          />
        </div>
      </section>

      {/* CTA at bottom (like homepage's final section) */}
      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Ready to Hack?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Submit your work for the hackathon <strong>now</strong>!
          </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://forms.gle/oyNfxVrsFquozApS9"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            Submit Work
          </Link>
        </div>
      </div>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary-500/10 rounded-lg p-4 shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between focus:outline-none"
      >
        <span className="text-text-900 font-semibold">{question}</span>
        <span className="text-text-600 ml-2">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-text-600 mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
