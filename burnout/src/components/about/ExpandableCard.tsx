"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ExpandableCardProps {
  title: string
  content: string
}

export default function ExpandableCard({ title, content }: ExpandableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="expandable-card"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="card card-front"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="card-title">{title}</h3>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="card card-back"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.4 }}
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

