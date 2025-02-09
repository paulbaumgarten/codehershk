'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown } from 'lucide-react'

import pictures from "@/imgs/event/pictures"
import "./archive.css"

export default function ArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedYear] = useState("2024")
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const visiblePhotos = showAllPhotos ? pictures : pictures.slice(0, 6)

  return (
    <div className="archive-container" ref={containerRef}>
      <motion.div 
        className="back-button"
        style={{ opacity }}
      >
        <Link href="/" className="back-link">
          <ArrowLeft className="back-icon" />
          Back to Home
        </Link>
      </motion.div>

      <motion.div 
        className="hero"
        style={{ scale, opacity, y }}
      >
        <h1 className="title">Event Archive</h1>
        <p className="subtitle">
          CodeHers {selectedYear} - Empowering Future Tech Leaders
        </p>
      </motion.div>

      <div className="content">
        <div className="wrapper">
          <motion.section 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Event Details</h2>
            <div className="event-details">
              <div className="overview">
                <h3 className="subheading">Overview</h3>
                <p className="text">
                  Our second year of CodeHers brought together 200+ participants for workshops,
                  panel discussions, and hands-on coding sessions.
                </p>
                <div className="stats">
                  <motion.div 
                    className="stat-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="stat-title">Participants</h4>
                    <p className="stat-value stat-value-pink">200+</p>
                  </motion.div>
                  <motion.div 
                    className="stat-card stat-card-green"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="stat-title">Workshops</h4>
                    <p className="stat-value stat-value-green">8</p>
                  </motion.div>
                </div>
              </div>
              <div className="highlights">
                <h3 className="subheading">Key Highlights</h3>
                <ul className="highlights-list">
                  <li>• Interactive coding workshops</li>
                  <li>• Industry expert panels</li>
                  <li>• Networking sessions</li>
                  <li>• Project showcases</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Photo Gallery</h2>
            <div className="gallery">
              <AnimatePresence>
                {visiblePhotos.map((pic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="image-wrapper"
                  >
                    <Image
                      src={pic.src}
                      alt='CodeHers Event Picture'
                      fill
                      className="image"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {!showAllPhotos && (
              <motion.button
                className="view-more-button"
                onClick={() => setShowAllPhotos(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More <ChevronDown className="view-more-icon" />
              </motion.button>
            )}
          </motion.section>

          <motion.section 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Join CodeHers 2025</h2>
            <div className="cta">
              <p className="cta-text">
                Be part of our growing community! Register your interest for CodeHers 2025.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Register Interest
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

