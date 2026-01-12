"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import pics24, { all } from "../../../components/pics24";
import pics25, { all2 } from "../../../eventarchive/2025/pics25";

export default function AllImagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
//   const [photos2024, setPhotos2024] = useState<Array<string>>(all(30));
  const [photos2025, setPhotos2025] = useState<Array<string>>(all2(85));
  // Load all images dynamically

  // Open modal
  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Listen for ESC key to close modal
  useEffect(() => {
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
          All 2025 Event Photos
        </h1>
        <p className="text-text-700 text-lg">
          Browse through all the images from our 2025 event!
        </p>
      </section>

      {/* Responsive Image Grid */}
      <section
        className="
          grid 
          grid-cols-1               
          sm:grid-cols-
          md:grid-cols-3 
          lg:grid-cols-4  
          gap-4
        "
      >
        {photos2025.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] cursor-pointer"
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt={`Event Photo ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-md hover:opacity-80 transition"
            />
          </div>
        ))}
      </section>

      {/* Back to Archive Link */}
      <div className="flex justify-center pt-6">
        <Link
          href="/eventarchive/"
          className="px-6 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all"
        >
          Back to Archive
        </Link>
      </div>

      {/* Full-Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed !m-0 inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="fixed top-6 right-6 bg-white text-black px-4 py-2 rounded-full text-lg font-bold hover:bg-gray-200 z-50"
            onClick={closeModal}
          >
            ✕
          </button>
          <div
            className="relative p-4 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
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
