"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import pics24, { all } from "../components/pics24";
import pics25, {all2} from "../eventarchive/2025/pics25";

export default function EventArchivePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [photos2024, setPhotos2024] = useState<Array<string>>(all(30));
  const [photos2025, setPhotos2025] = useState<Array<string>>(all2(85));

  // Open Modal with Selected Image
  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle "Escape" key press to close modal
  useEffect(() => {
    // Demo: get 30 images from your "pics24" or "all"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Event Archive
        </h1>
        <p className="text-text-700 text-lg">
          Look back at our past events and see how far CodeHers has come!
        </p>
      </section>

      {/* Archive Section */}

      {/* <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-4">
         <h2 className="text-2xl font-bold text-text-900">Archive for 2025</h2>

      </section> */}

      {/* 2025 Archive */}
      <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-bold text-text-900">Archive for 2025</h2>
        <p className="text-text-600 italic">Fun Fact: The first event with XP and Hackathon!</p>
        <p className="text-text-700">
          Participants: <strong>350+</strong> &middot; Workshops: <strong>40+</strong>
        </p>

        {/* 📸 Responsive Image Carousel */}
        <Splide
          className="mt-4"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            // Start with 1 image per page on the smallest screens
            perPage: 1,
            mediaQuery: "min",
            // Upgrade to more images as screen size increases
            breakpoints: {
              640: { perPage: 2 },  // >=640px
              768: { perPage: 3 },  // >=768px
              1024: { perPage: 4 }, // >=1024px
            },
          }}
          aria-label="Event Photos"
        >
          {photos2025.map((src, index) => (
            <SplideSlide key={index}>
              <div
                className="relative w-full h-72 bg-gray-200 rounded-lg cursor-pointer"
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt="2025 Event Photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* CTA Links */}
        <div className="flex space-x-3 pt-4">
          <Link
            href="/eventarchive/2025/images"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            View 2025 Event Photos
          </Link>

          <Link
            href="/eventarchive/2025/workshops"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            View 2025 Workshops
          </Link>

          <Link
            href="/eventarchive/2025/hackathon"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            View 2025 Hackathon
          </Link>

            <Link
            href="/eventarchive/2025/insta"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            See Instagram Posts
          </Link>

            <Link
            href="https://www.youtube.com/watch?v=4yTva9Ncbrs"
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            Watch Event Trailer
          </Link>

        </div>
      </section>



























      {/* 2024 Archive */}
      <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-bold text-text-900">Archive for 2024</h2>
        <p className="text-text-600 italic">Fun Fact: Our first event!</p>
        <p className="text-text-700">
          Participants: <strong>300</strong> &middot; Workshops: <strong>25</strong>
        </p>

        {/* 📸 Responsive Image Carousel */}
        <Splide
          className="mt-4"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            // Start with 1 image per page on the smallest screens
            perPage: 1,
            mediaQuery: "min",
            // Upgrade to more images as screen size increases
            breakpoints: {
              640: { perPage: 2 },  // >=640px
              768: { perPage: 3 },  // >=768px
              1024: { perPage: 4 }, // >=1024px
            },
          }}
          aria-label="Event Photos"
        >
          {photos2024.map((src, index) => (
            <SplideSlide key={index}>
              <div
                className="relative w-full h-72 bg-gray-200 rounded-lg cursor-pointer"
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt="2024 Event Photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* CTA Links */}
        <div className="flex space-x-3 pt-4">
          <Link
            href="/eventarchive/2024/images"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            View 2024 Event Photos
          </Link>

          <Link
            href="/eventarchive/2024/workshops"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            View 2024 Workshops
          </Link>

          <Link
            href="/eventarchive/2024/insta"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            See Instagram Posts
          </Link> 
          
          <Link
            href="https://www.youtube.com/watch?v=zgT_fEx4XTk"
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            Watch Event Highlights
          </Link>
      
          {/* <Link
            href="/events"
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all"
          >
            Check Current Event
          </Link> */}
        </div>
      </section>

      {/* 🖼️ Full-Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed !m-0 inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal} // Clicking outside closes modal
        >
          {/* Close Button (Top-Right of Screen) */}
          <button
            className="fixed top-6 right-6 bg-white text-black px-4 py-2 rounded-full text-lg font-bold hover:bg-gray-200 z-50"
            onClick={closeModal}
          >
            ✕
          </button>

          {/* Image Container (Prevents click from closing modal) */}
          <div className="relative p-4 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full View"
              width={1600}
              height={900}
              className="rounded-lg shadow-lg max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
