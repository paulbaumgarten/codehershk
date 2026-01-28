"use client";

import Link from "next/link";
import Image from "next/image";
import './PhotoGrid.css';
import { get2026WorkshopsData } from "@/app/eventarchive/2025/workshops/GetWorkshopsData";
import { get2026ScheduleData } from "@/app/eventarchive/2025/workshops/GetScheduleData";
import Accordion from "@/app/components/Accordion";


interface Photo {
  id: number;
  url: string;
  alt?: string;
}

interface PhotoGridProps {
  photos?: Photo[];
  columns?: number;
  imageHeight?: number;
}
const PhotoGrid: React.FC<PhotoGridProps> = ({ 
  photos, 
  columns = 3, 
  imageHeight = 300 
}) => {
  // Default photos if none provided
  const defaultPhotos: Photo[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      alt: "Mountain landscape"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop",
      alt: "Northern lights"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
      alt: "Lake view"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      alt: "Forest mist"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      alt: "Woodland path"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=600&h=400&fit=crop",
      alt: "Star night"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      alt: "Green forest"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop",
      alt: "Mountain valley"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Snow mountains"
    },
  ];

  const displayPhotos = photos || defaultPhotos;

  return (
    <div className="photo-grid-container">
      <div className="photo-grid" style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)` 
      }}>
        {displayPhotos.map((photo: Photo) => (
          <div 
            key={photo.id} 
            className="photo-item-wrapper"
          >
            <div className="photo-item" style={{ height: `${imageHeight}px` }}>
              <Image 
                src={photo.url} 
                alt={photo.alt || "Team photo"}
                width={600}
                height={400}
                className="photo-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CodeHers2026Page() {


  const teamPhotos = [
    {
      id: 1,
      url: "/team/students26/CIS26.png",
      alt: "CIS"
    },

        {
      id: 2,
      url: "/team/students26/GSIS26.png",
      alt: "GSIS"
    },
        {
      id: 3,
      url: "/team/students26/HARROW26.png",
      alt: "HARROW"
    },

        {
      id: 4,
      url: "/team/students26/HKIS26.png",
      alt: "HKIS"
    },

        {
      id: 5,
      url: "/team/students26/ISF26.png",
      alt: "ISF"
    },

      {
      id: 6,
      url: "/team/students26/KELLETT26.png",
      alt: "KELLETT"
    },

    {
      id: 7,
      url: "/team/students26/KGV26.png",
      alt: "KGV"
    },

        {
      id: 8,
      url: "/team/students26/SIS26.png",
      alt: "SIS"
    },

        {
      id: 9,
      url: "/team/students26/STC26.png",
      alt: "STC"
    },

        {
      id: 10,
      url: "/team/students26/VSA26.png",
      alt: "VSA"
    },

        {
      id: 11,
      url: "/team/students26/WIS26.png",
      alt: "WIS"
    },

  ];

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">

      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          2026 Team
        </h1>
        <p className="text-text-700 text-lg">
        CodeHers 2026 was organised by a team of 22 girls from 11 different schools across Hong Kong brought together by our passion for technology.
        </p>
      </section>


        <section className="bg-secondary-500/10 p-6 rounded-xl shadow flex flex-col md:flex-row gap-3 items-start">
        {/* Left side text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-800">Our Team</h2>
          <p className="text-text-600">
            Scroll down to see the faces behind CodeHers for 2026!
          </p>
        </div>

      </section>


      {/* Photo Grid Section */}
      <section className="py-8">
        {/* Photo Grid Component - Simple photos only */}
        <PhotoGrid 
          photos={teamPhotos} // Pass your actual photos here
          columns={3}
        />
      </section>

    </main>
  );
}