"use client"

import { motion } from "framer-motion"

export default function SchoolLogos() {
  return (
    <div className="flex justify-center gap-8 flex-wrap">
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-24 h-24 bg-gray-100 rounded-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  )
}

