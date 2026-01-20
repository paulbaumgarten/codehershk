"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade" | "slide" | "scale"
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  animation = "fade",
  delay = 0 
}: ScrollAnimationProps) {
  const { scrollYProgress } = useScroll()

  const animations = {
    fade: {
      opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
      y: useTransform(scrollYProgress, [0, 0.1], [50, 0])
    },
    slide: {
      x: useTransform(scrollYProgress, [0, 0.1], [-100, 0]),
      opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
    },
    scale: {
      scale: useTransform(scrollYProgress, [0, 0.1], [0.8, 1]),
      opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
    }
  }

  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.6, delay }}
      style={animations[animation]}
    >
      {children}
    </motion.div>
  )
}

