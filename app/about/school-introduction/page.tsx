"use client";

import Link from "next/link";
import Image from "next/image";

export default function IntroductionToSchoolsPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">
      {/* 1) Hero Section (similar style as homepage, no blocky image) */}
      <div className="flex flex-col pt-4 pb-10 gap-y-12 md:py-16 mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            Introduction to{" "}
            <b>
              <span className="text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
                CodeHers
              </span>
            </b>
          </h1>
          <h2 className="text-3xl font-bold lg:text-4xl xl:text-5xl text-text-800">
            Empowering Women in Tech at <i><b>Your</b></i> School
          </h2>

          <p className="text-text-700 text-lg">
            Welcome, educators! CodeHers is a student-led initiative that
            empowers female and non-binary students through hands-on coding
            workshops, hackathons, and community events across Hong Kong’s
            diverse schools.
          </p>

          {/* Buttons / Links */}
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            {/* PDF Download */}
            <Link
              href="./CodeHers Letter of introduction 2025.pdf"
              target="_blank"
              className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Download PDF
            </Link>

            {/* Contact Page */}
            <Link
              href="/contact"
              className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-primary-500 text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 2) Who We Are & What We Offer */}
      <div className="flex flex-col bg-secondary-500/20 p-6 md:p-8 space-y-6 rounded-xl lg:py-12 lg:px-20 mb-10">
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Who We Are &amp; What We Offer
        </h2>
        <p className="text-text-700 text-lg max-w-3xl mx-auto text-center">
          CodeHers is run by passionate students from schools across Hong Kong.
          We aim to bridge the gender gap in technology by providing equal
          opportunities for learning and mentorship. Our events are both
          beginner-friendly and engaging for more advanced coders. Below is a
          brief overview of what we bring to the table.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Workshops */}
          <div className="p-6 bg-white rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-text-900">
              Hands-On Workshops
            </h3>
            <p className="text-text-700">
              We partner with educators and industry volunteers to deliver
              sessions on Python, Web Development, App Building, AI, and more—all
              tailored to female/non-binary students.
            </p>
          </div>

          {/* Hackathons */}
          <div className="p-6 bg-white rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-text-900">
              Hackathons &amp; Competitions
            </h3>
            <p className="text-text-700">
              Students work in teams to solve real-world problems and build
              innovative solutions. They can present to peers, mentors, and
              judges in a supportive environment.
            </p>
          </div>

          {/* Mentorship */}
          <div className="p-6 bg-white rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-text-900">
              Mentorship &amp; Community
            </h3>
            <p className="text-text-700">
              We connect participants with experienced mentors—university
              students, professionals, and CodeHers alumni—to guide their coding
              journeys and offer career insights.
            </p>
          </div>

          {/* Collaborative Events */}
          <div className="p-6 bg-white rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold text-text-900">
              School Collaborations
            </h3>
            <p className="text-text-700">
              We host events on campus, ensuring accessibility for students. We
              also assist with resources, planning, and outreach to maximize
              student engagement and success.
            </p>
          </div>
        </div>
      </div>

      {/* 3) What Schools Provide */}
      <section className="flex flex-col p-6 md:p-8 space-y-6 mb-10">
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-5xl">
          What Schools Provide
        </h2>
        <p className="max-w-4xl mx-auto text-text-700 text-lg text-center">
          We believe a successful event involves a strong partnership. Here’s how
          schools can help us bring CodeHers programs to life:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-semibold text-text-900">
              Venue &amp; Logistics
            </h3>
            <p className="text-text-700">
              Provide a suitable space (classrooms, lecture halls, etc.) with
              AV/tech setup, and assist with basic logistical arrangements like
              seating, projectors, Wi-Fi, etc.
            </p>
          </div>
          <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-semibold text-text-900">
              Communication &amp; Outreach
            </h3>
            <p className="text-text-700">
              Help us spread the word among your student body, faculty, and
              parents. Share event details in newsletters, social media, or
              school announcements.
            </p>
          </div>
          <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-semibold text-text-900">
              Encouraging Participation
            </h3>
            <p className="text-text-700">
              Motivate students to attend and explore coding. Teachers and staff
              can offer support, build excitement, and even recommend
              participants who could benefit.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Why Partner With Us Section */}
      <section className="flex flex-col p-6 md:p-8 space-y-6 mb-10 bg-secondary-500/20 rounded-xl">
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-5xl">
          Why Partner with CodeHers?
        </h2>
        <div className="max-w-4xl mx-auto text-text-700 text-lg space-y-4">
          <p>
            By inviting CodeHers to run workshops or co-organize coding events,
            your school empowers students to build crucial 21st-century skills:
            problem-solving, creativity, and collaboration.
          </p>
          <p>
            We handle planning, setup, and facilitation—working closely with your
            staff to ensure a smooth experience. Our focus is on interactive
            learning, real-world projects, and connecting students with
            inspiring mentors.
          </p>
        </div>
      </section>

      {/* 5) Contact & Official Email (styled like contact page) */}
      <section className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
            Want to Collaborate?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Reach out &amp; let’s bring CodeHers to your students!
          </h5>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-all"
          >
            Contact Us
          </Link>

          {/* Official Email (similar to contact page styling) */}
          {/* <p className="inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose bg-secondary-100 text-text-700 rounded-lg">
            <span className="mr-2 font-medium text-text-800">Email:</span>
            <a
              href="mailto:codehershk@gmail.com"
              className="text-primary-500 underline"
            >
              codehershk@gmail.com
            </a>
          </p> */}

          {/* PDF Link (again, optional) */}
          <Link
            href="./CodeHers Letter of introduction 2025.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose bg-accent-500 text-white hover:bg-accent-600 transition-all rounded-lg"
          >
            Download PDF
          </Link>
        </div>
      </section>
    </main>
  );
}
