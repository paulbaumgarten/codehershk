"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HackathonPage() {
  // For timeline
  const timelineEvents = [
    { title: "Hackathon Launch", date: "January" },
    { title: "Hackathon Registration and Submission Deadline", date: "February 21st 2026" },
    { title: "Finalists Shortlist", date: "February 28th 2026" },
    { title: "Exhibition, Live Finals and Award Ceremony", date: "March 7th 2026" },
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
            2nd Hackathon
          </h1>
          <p className="text-text-700 text-lg">            
            Welcome to the 2nd CodeHers Hackathon, an exciting opportunity to encourage girls of all ages to showcase their talents and passions in STEM!

            Got a brilliant idea that can help girls and women around the world? Put your coding chops to the test!
</p>
<p className="text-text-700 text-lg">  
            Participants will have the chance to work individually or form teams of up to 5 with anyone, regardless of their school.

            This online hackathon will take place from January to February 21st, leading to a live finals and award ceremony on March 7th. 
                      </p>

      
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Submit Work Button */}
          <Link
            href="https://forms.gle/mJV9tqRHKPaEhtS38"
            className="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500 hover:bg-primary-600 transition-all"
          >
            Submit Work
          </Link>

          {/* Hackathon Guide DOCS */}
          <Link
            href="https://docs.google.com/document/d/1M3P9ztEklNLIb1Hx3X-zBG9MWLHINw60f8J5DzoqTo0/edit?usp=sharing"
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

        {/* Theme Section */}
        <div className="space-y-6 mb-7">
            <h3 className="text-3xl font-bold text-text-900">Theme</h3>
            <p className="text-text-800 text-xl">
                Women in STEM face systemic barriers—not because of a lack of ability, but because they lack visibility, validation, and voice. However, we believe that women’s contributions in STEM are recognized, amplified, and rewarded. Therefore, this year's theme focuses on developing innovative technology tools that directly enhance the lives of girls and women, empowering them to succeed, lead, and thrive.
            </p>
            <p className="text-text-700 text-xl">
                Potential Solutions:
            </p>
            <ul className="list-disc list-inside text-text-700">
                <li>A mentorship-matching platform to connect students with women in tech/engineering</li>
                <li>A website to teach women financial literacy</li>
                <li>An app to educate on reproductive health</li>
                <li>A blend of software and hardware solutions</li>
            </ul>
            <p className="text-text-700 text-xl">
                We encourage all female students to participate, regardless of experience, background, or perceived skill. Every idea matters. Every perspective changes the future.
            </p>
            <p className="text-text-700 text-xl font-bold">
                Also, joining the hackathon WILL allow you to gain EXTRA XP for the real event!
            </p>
        </div>



        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-text-900 mb-4">
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

        {/* Criteria */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-text-900 mb-4">
            Judging Criteria
          </h3>
          {/* <p className="text-text-700">
            Yes, we’re rating your work—but we promise, it’s all in good fun!
          </p> */}
          {/* Criteria Table or bullet points */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-text-700 border-collapse">
              <thead>
                <tr className="border-b border-text-300 bg-secondary-100">
                  <th className="p-3 text-left font-semibold text-text-900">
                    Criterion
                  </th>
                  <th className="p-3 text-left font-semibold text-text-900">
                    Mark
                  </th>
                  <th className="p-3 text-left font-semibold text-text-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Relevance to Theme</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    The project must clearly align with the designated theme of the hackathon, demonstrating explicit connections between the project and the theme.
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Creativity & Originality</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    Projects should present a unique approach to addressing the identified problem, showcasing innovative features or methodologies that differentiate them from existing solutions.
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Technical Excellence</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    Evaluates the quality of the code and technical implementation, ensuring projects are free from critical bugs, run smoothly, and maintain user-friendly designs with intuitive navigation
                  </td>
                </tr>
                <tr className="border-b border-text-300">
                  <td className="p-3 font-medium">Implementation Effectiveness</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    Focuses on how well the project fulfills its intended purpose, demonstrating a high level of functionality and completeness, and potential for future enhancements or scalability.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Presentation & Engagement (Finals only)</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    The pitch should be engaging and well-structured, effectively conveying the project’s value.  Judges will assess public speaking skills, confidence, clarity, and audience engagement.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    


        
      {/* Submission Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-text-900 mb-4">
            Registration and Submission
          </h3>
          <p className="text-text-700 mb-4">
            This year, registration and submission of projects for the hackathon will be simulatenous in 1 form! 
            Submissions are expected to include a 1500-character project proposal and a 5-minute long video with narration to both demonstrate your project and show off your presentation. 
            In addition, partipicants are <strong>strongly encouraged</strong> to submit a prototype. 
            </p>
           <p className="text-text-700 mb-4">
            In addition, partipicants are <strong>strongly encouraged</strong> to submit a prototype. 
            This could be a physical item (with photos, videos or slideshows showcasing), or even a link to an accessible codebase. <i>(We recommend all participants to use <Link href="https://github.com/" className="text-primary-500 underline hover:text-primary-600">GitHub</Link> to store their code)</i> so we can run and review your code)
          </p>
           <p className="text-text-700 mb-4">
            Make sure to show passion and engagement in your presentation!
          </p>
        </div>


    {/* Exhibition info */}
            <div className="space-y-4">
          <h3 className="text-3xl font-bold text-text-900 mb-4">
            Exhibition and Finals Information
          </h3>
          <p className="text-text-700 mb-4">
The top five teams (in the preliminary round) will present live to the judges on March 7th, followed by a Q&A session.
            </p>
        <p className="text-text-700 mb-4">
            Selected teams will be invited to showcase their ideas at the project exhibition in dedicated booths on the day of the event, regardless of whether they advance to the finals.
    </p>

    <p className="text-text-700 mb-4">
            More information will be sent via email to teams who have entered the finals and/or are invited to exhibit on the day.
    </p>
    


        </div>


      <section className="pb-4">
        <h2 className="text-3xl font-bold text-text-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col space-y-2">
          <FAQItem
            question="Who can join the hackathon?"
            answer="Any student eligible to join the CodeHers 2026 event, and is passionate about women empowerment and tech is welcome!"
          />
          <FAQItem
            question="Do I need prior coding experience?"
            answer="Not at all! CodeHers Hackathons welcome problem-solvers of all kinds, as we believe diverse skill sets make stronger teams, and please note that AI is allowed to help you build your project!"
          />
          <FAQItem
            question="Is there a cost to attend?"
            answer="No, there is no cost required to participate! We encourage everyone to give the Hackathon a chance!"
          />
          <FAQItem
            question="What should I bring to a hackathon?"
            answer="Be sure to bring any necessary equipment, such as your laptop or tablet to work on your presentation."
          />
        <FAQItem
            question="What if I’ve never been to a hackathon before?"
            answer="That’s okay! We strongly encourage newcomers. Hackathons are a great way to learn new skills and bring your ideas to life! No prior experience is required: just an interest in creating, problem-solving, and collaborating. "
        />
        <FAQItem
            question="Can I participate alone?"
            answer="Yes! While teamwork is encouraged, solo participants are welcome."
        />
        <FAQItem
            question="Am I able to participate in the Hackathon even if I am unavailable on the day of the finals?"
            answer="Yes! Please remember to register for the CodeHers event and hackathon normally. If this applies to you or one of your team members, please email us at hackathon@codehershk.org."
        />

        <FAQItem
            question="What if there are extenuating circumstances affecting my performance and final submission?"
            answer="No worries, that is completely understandable. If this is the case, please contact us immediately at hackathon@codehershk.org, and we will be sure to judge you as fair as possible!"
        />
        

        </div>
      </section>

      </div>

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
            href="https://forms.gle/bZn3GbcRNZfoLmPP6"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            Submit Work
          </Link>
        </div>
      </div>

      {/* CTA at bottom (like homepage's final section) */}
      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Got more questions?
          </h2>
        <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Email us at <a href="mailto:hackathon@codehershk.org" className="text-primary-700 hover:text-primary-900">hackathon@codehershk.org</a>
        </h5>

        <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            And check out the hackathon guide below!
        </h5>

        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://docs.google.com/document/d/1M3P9ztEklNLIb1Hx3X-zBG9MWLHINw60f8J5DzoqTo0/edit?usp=sharing"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            View Hackathon Guide
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
