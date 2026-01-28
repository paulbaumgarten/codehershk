"use client";

import Link from "next/link";
import Image from "next/image";
import Countdown from "../../../components/countdown";
import { get2026WorkshopsData } from "@/app/eventarchive/2025/workshops/GetWorkshopsData";
import { get2026ScheduleData } from "@/app/eventarchive/2025/workshops/GetScheduleData";
import Accordion from "@/app/components/Accordion";

async function SessionSection({ session, index }: { session: any, index: any }) {
  const workshops = get2026WorkshopsData();
  // console.log(session);
  return (
    <div key={index} className="mt-8">
      <h3 className="text-2xl font-extrabold text-text-900 sm:text-3xl">Session {index + 1}</h3>
      <h4 className="text-sm font-medium text-secondary-400 sm:text-lg">{session.time}</h4>
      <div className="mt-4 divide-y divide-text-100/50 divide-solid">
        {session["workshopIDs"].map((workshopId: any, indexWks: any) => {
          let workshop = workshops[workshopId - 1];
          return (
            <Accordion key={indexWks} title={workshop.title} content={workshop.description} index={parseInt(workshop.id)} author={workshop.by} category={workshop.category} location={workshop.location[index]} />
          );
        })}
      </div>
    </div>
  );
}

export default function CodeHers2026Page() {
    const schedule = get2026ScheduleData();
  
    const scheduleSections = schedule.map((session: any, index: any) => {
      return (
        <SessionSection key={index} session={session} index={index} />
      );
    });
  
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">

      {/* 1) Hero Section */}
      <div className="flex flex-col-reverse pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 md:flex-row mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <h2 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
        2026 Workshops
         </h2>
          <h2 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
            More information coming soon...
          </h2>




{/* Workshops Information */}
    {/* <div style={{
      backgroundColor: '#fff',
      padding: '20px 30px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        margin: '0 0 15px 0', 
        fontSize: '16px', 
        fontWeight: '800',
        color: '#333'
      }}>
        Session Levels
      </h2>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: '#e0e0e0',
            color: '#555',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '500'
          }}>No coding</span>
          <span style={{ fontSize: '14px', color: '#666' }}>No coding required</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: '#a8e6cf',
            color: '#2d6a4f',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '500'
          }}>Beginner</span>
          <span style={{ fontSize: '14px', color: '#666' }}>No programming experience required</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: '#c2d9fb',
            color: 'blue',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '500'
          }}>Intermediate</span>
          <span style={{ fontSize: '14px', color: '#666' }}>Basic understanding of programming skills</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: '#e9d5ff',
            color: 'purple',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '500'
          }}>Advanced</span>
          <span style={{ fontSize: '14px', color: '#666' }}>Proficient understanding of programming skills</span>
        </div>
      </div>
    </div> */}

          {/* <div className="mt-4">{scheduleSections}</div> */}


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
