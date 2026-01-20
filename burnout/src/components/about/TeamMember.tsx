"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberProps { 
  name: string
  school: string
  imageUrl: string
}

export default function TeamMember({ name, school, imageUrl }: TeamMemberProps) {
  return (
    <motion.div 
      className="team-member"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="team-member-image-container">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="team-member-image"
        />
      </div>
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-school">{school}</p>
      </div>
    </motion.div>
  )
}

