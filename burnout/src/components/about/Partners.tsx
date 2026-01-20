"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button className="p-2 bg-white rounded-full shadow-lg">←</button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button className="p-2 bg-white rounded-full shadow-lg">→</button>
      </div>
      <div 
        ref={containerRef}
        className="overflow-x-auto flex gap-8 px-12 py-4 hide-scrollbar"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-none w-64 h-32 bg-gray-100 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}

