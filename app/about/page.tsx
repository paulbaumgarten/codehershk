"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import StudentPics from "../components/StudentPics";

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
          About Us
        </h1>
        <p className="text-text-700 text-lg">
          We are CodeHers, a team of girls from 11 different schools across Hong Kong brought
          together by our passion for technology. Our mission is to empower the
          next generation of women in STEM.
        </p>
      </section>

      {/* Our Team Section: side-by-side on md+ screens */}
      <section className="bg-secondary-500/10 p-6 rounded-xl shadow flex flex-col md:flex-row gap-3 items-start">
        {/* Left side text */}
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold text-text-800">Our Team</h2>
          <p className="text-text-600">
            We’re a collective of passionate students from various schools across Hong Kong. Our team brings a wide range of
            talents—from web dev to AI—to create events that spark curiosity
            and empower more girls to explore coding.
          </p>
          <p className="text-text-600">
            Scroll through our carousel to see the faces behind CodeHers! Hover
            (or tap on mobile) to flip each card and reveal the back side.
          </p>
        </div>

        {/* Right side: smaller max width so it's not huge */}
        <div className="w-[260px] rounded-lg m-auto md:m-0 md:ml-auto overflow-hidden">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 3000,
              arrows: true,
              pagination: false,
              speed: 900,
              gap: "10px"
            }}
            className="overflow-hidden"
          >
            {StudentPics.map((pic, idx) => (
              <SplideSlide key={idx} className="w-fit">
                <FlipCard front={pic.front} back={pic.back} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Vision
          </h3>
          <p className="text-text-600">
            Empowering girls to become the future leaders of technology.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Mission
          </h3>
          <p className="text-text-600">
            Break down stereotypes, encourage STEAM exploration, and build
            confidence in young women.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Motto
          </h3>
          <p className="text-text-600">
            Empowering <strong>her</strong> future.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-4">
        <h2 className="text-2xl font-bold text-text-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col space-y-2">
          <FAQItem
            question="Who can join CodeHers events?"
            answer="Any student in Hong Kong and nearby areas (in Y7/G6/P6 and above) identifying as female/non-binary is welcome! We do prioritize slots for that demographic."
          />
          <FAQItem
            question="Do I need prior coding experience?"
            answer="Not at all! Our workshops cater to beginners as well as more experienced coders. We love seeing new faces in tech!"
          />
          <FAQItem
            question="How often do you run events?"
            answer="We host at least one major event each year, plus smaller workshops or meetups throughout the year. Check our Current Events page to stay updated."
          />
          <FAQItem
            question="Is there a fee to participate?"
            answer="Most of our events are free, thanks to sponsors and partners who share our mission of making tech accessible to all."
          />
          <FAQItem
            question="What if I'm not in any of your partnering schools?"
            answer="That's perfectly fine! Signups are open to any eligible student (female or non-binary in Y7/G6/P6 and above) in Hong Kong and nearby areas from any school!"
          />
          <FAQItem
            question="What are the prerequisites to attending your event?"
            answer="As long as you have a laptop with WiFi access and are an eligible student (female or non-binary in Y7/G6/P6 and above), you can attend our event! No knowledge or other prerequisites are required."
          />
          <FAQItem
            question="I want to help support your event as a student, how can I help?"
            answer="We're glad to hear you're interested! Look out for postings for support staff, photographers, or workshop hosts in your school's bulletin or on our Instagram. If you'd like to join our organizing team (restricted to partner schools), speak to a CS teacher or rep at your school or contact us for more info."
          />
          <FAQItem
            question="Why run a girls-only event?"
            answer={
              <>
                Girls-only coding events like CodeHers address the ongoing gender
                disparity in tech by creating an empowering space for young girls
                to explore coding without bias.&nbsp;
                <Link
                  href="/about/girls-only"
                  className="text-primary-500 underline hover:text-primary-600"
                >
                  Read more in our dedicated article
                </Link>.
              </>
            }
          />
        </div>
      </section>

      {/* CTA */}
      <section className="pt-2 pb-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">
          Any other questions?
        </h2>
        <p className="text-text-700 mb-4">
          We’re more than happy to help you out!
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

/** Slide-down FAQ component with framer-motion. */
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
