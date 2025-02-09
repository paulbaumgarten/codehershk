"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

interface EventCardProps {
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
}

export default function EventCard({ title, date, location, description, imageUrl }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`event-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div className="card-face card-front">
        <h3>{title}</h3>
        <img src={imageUrl || "/placeholder.svg"} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      </motion.div>
      <motion.div className="card-face card-back">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
      </motion.div>
    </div>
  )
}

