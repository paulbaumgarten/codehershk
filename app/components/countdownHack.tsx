// test 4
"use client"

import React, { useState, useEffect } from 'react';

interface TimeBlockProps {
  value: number;
  label: string;
}

function CountdownHack() {
  const targetDate = new Date('2026-02-21T23:59:00+08:00');
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const TimeBlock = ({ value, label }: TimeBlockProps) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-transparent border-2 border-pink-400 text-pink-500 text-3xl md:text-5xl font-bold rounded-lg px-4 py-3 min-w-16 md:min-w-20">
        <span className="tabular-nums">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-gray-500 text-sm mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );
  
  if (timeLeft.expired) {
    return (
      <div className="bg-transparent flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-pink-500 mb-4">
            We are no longer accepting submission for this year's hackathon. Hope to see you next year!
          </h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-transparent flex flex-col items-center justify-center p-6 md:p-8">
      <div className="text-center mb-6 md:mb-8">
                <h1 className="block text-1xl font-extrabold tracking-wide text-center text-text-900 sm:text-5xl">
Hackathon Submission Deadline</h1>
        <p className="text-pink-400 text-base md:text-lg">February 21, 2026 • 11:59 PM HKT</p>
      </div>
      
      <div className="flex gap-2 md:gap-3">
        <TimeBlock value={timeLeft.days} label="Days" />
        <div className="text-3xl md:text-5xl text-pink-400 font-bold self-center">:</div>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <div className="text-3xl md:text-5xl text-pink-400 font-bold self-center">:</div>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <div className="text-3xl md:text-5xl text-pink-400 font-bold self-center">:</div>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <div className="mt-6 md:mt-8 text-gray-500 text-sm">
        HKT: {new Date().toLocaleTimeString('en-US', { 
          timeZone: 'Asia/Hong_Kong', 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit' 
        })}
      </div>
    </div>
  );
}

export default CountdownHack;


