// test 4
"use client"

import React, { useState, useEffect } from 'react';

interface TimeBlockProps {
  value: number;
  label: string;
}

function Countdown() {
  const targetDate = new Date('2026-03-07T09:30:00+08:00');
  
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
          <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mb-4">
            🎉 CodeHers 2026 has started! 🎉
          </h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-transparent flex flex-col items-center justify-center p-6 md:p-8">
      <div className="text-center mb-6 md:mb-8">
                <h1 className="block text-1xl font-extrabold tracking-wide text-center text-text-900 sm:text-5xl">
Countdown To CodeHers 2026</h1>
        <p className="text-pink-400 text-base md:text-lg">March 7, 2026 • 9:30 AM HKT</p>
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

export default Countdown;














// // test 3 - like
// "use client"

// import React, { useState, useEffect } from 'react';

// interface TimeBlockProps {
//   value: number;
//   label: string;
// }

// function Countdown() {
//   const targetDate = new Date('2026-03-07T09:30:00+08:00');
  
//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const difference = targetDate - now;
    
//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
//     }
    
//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       expired: false
//     };
//   };
  
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);
  
//   const TimeBlock = ({ value, label }: TimeBlockProps) => (
//     <div className="flex flex-col items-center mx-0.5">
//       <div className="bg-transparent border border-pink-400 text-pink-500 text-2xl md:text-4xl font-bold rounded-md px-3 py-2 min-w-14 md:min-w-16">
//         <span className="tabular-nums">{String(value).padStart(2, '0')}</span>
//       </div>
//       <span className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{label}</span>
//     </div>
//   );
  
//   if (timeLeft.expired) {
//     return (
//       <div className="bg-transparent flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl md:text-4xl font-bold text-pink-500 mb-2">
//             🎉 Event Started! 🎉
//           </h1>
//           <p className="text-gray-500 text-sm">CodeHers 2026 is happening now!</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="bg-transparent flex flex-col items-center justify-center">
//       <div className="text-center mb-4">
//         <h1 className="text-lg md:text-xl font-bold text-primary mb-0.5">Countdown To CodeHers 2026</h1>
//         <p className="text-pink-400 text-sm">March 7, 2026 • 9:30 AM HKT</p>
//       </div>
      
//       <div className="flex">
//         <TimeBlock value={timeLeft.days} label="Days" />
//         <div className="text-2xl md:text-4xl text-pink-400 font-bold self-center mx-0.5">:</div>
//         <TimeBlock value={timeLeft.hours} label="Hours" />
//         <div className="text-2xl md:text-4xl text-pink-400 font-bold self-center mx-0.5">:</div>
//         <TimeBlock value={timeLeft.minutes} label="Minutes" />
//         <div className="text-2xl md:text-4xl text-pink-400 font-bold self-center mx-0.5">:</div>
//         <TimeBlock value={timeLeft.seconds} label="Seconds" />
//       </div>
      
//       <div className="mt-4 text-gray-500 text-xs">
//         HKT: {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Hong_Kong', hour: '2-digit', minute: '2-digit' })}
//       </div>
//     </div>
//   );
// }

// export default Countdown;












// test 2
// "use client"

// import React, { useState, useEffect } from 'react';

// interface TimeBlockProps {
//   value: number;
//   label: string;
// }

// function Countdown() {
//   const targetDate = new Date('2026-03-07T09:30:00+08:00');
  
//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const difference = targetDate - now;
    
//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
//     }
    
//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       expired: false
//     };
//   };
  
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);
  
//   const TimeBlock = ({ value, label }: TimeBlockProps) => (
//     <div className="flex flex-col items-center mx-1">
//       <div className="bg-transparent border-2 border-pink-500 text-pink-500 text-3xl md:text-5xl font-bold rounded-lg p-2 md:p-3 min-w-16 md:min-w-20">
//         <span className="tabular-nums">{String(value).padStart(2, '0')}</span>
//       </div>
//       <span className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-wider">{label}</span>
//     </div>
//   );
  
//   if (timeLeft.expired) {
//     return (
//       <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4">
//         <div className="text-center">
//           <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 mb-4">
//             🎉 Time's Up! 🎉
//           </h1>
//           <p className="text-gray-500 text-base">CodeHers 2026 has arrived!</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4">
//       <div className="text-center mb-6 md:mb-8">
//         <h1 className="text-xl md:text-3xl font-bold text-white mb-1">Countdown To</h1>
//         <p className="text-pink-400 text-base md:text-lg">CodeHers 2026</p>
//       </div>
      
//       <div className="flex gap-1 md:gap-2">
//         <TimeBlock value={timeLeft.days} label="Days" />
//         <div className="text-3xl md:text-5xl text-pink-400 font-bold self-start mt-3 md:mt-4">:</div>
//         <TimeBlock value={timeLeft.hours} label="Hours" />
//         <div className="text-3xl md:text-5xl text-pink-400 font-bold self-start mt-3 md:mt-4">:</div>
//         <TimeBlock value={timeLeft.minutes} label="Minutes" />
//         <div className="text-3xl md:text-5xl text-pink-400 font-bold self-start mt-3 md:mt-4">:</div>
//         <TimeBlock value={timeLeft.seconds} label="Seconds" />
//       </div>
      
//       <div className="mt-8 text-gray-500 text-xs">
//         Current time: {new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', dateStyle: 'full', timeStyle: 'medium' })} HKT
//       </div>
//     </div>
//   );
// }

// export default Countdown;









// original
// "use client"

// import React, { useState, useEffect } from 'react';

// interface TimeBlockProps {
//   value: number;
//   label: string;
// }
