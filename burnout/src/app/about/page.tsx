"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TeamMember from "@/components/about/TeamMember"
import ExpandableCard from "@/components/about/ExpandableCard"
import "./about.css"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  const scrollPartners = (direction: 'left' | 'right') => {
    if (partnersRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      partnersRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className="container">
      <motion.header 
        className="header"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <h1 className="header-title">CODEHERS</h1>
        <motion.div 
          className="header-gradient"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
        />
      </motion.header>

      <main className="section">
        <div className="core-team">
          <h2 className="core-team-title">CodeHers 2025</h2>
          <div className="core-team-photo" />
          <h3>Core Committee</h3>
        </div>

        <div className="team-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <TeamMember
              key={i}
              name="Team Member Name"
              school="School Name"
              imageUrl="/placeholder.svg"
            />
          ))}
        </div>

        <div className="about-text">
          <h2 className="about-title">WE ARE CODE(H)ERS!</h2>
          <p>
            We are a team of x number of girls from different schools brought 
            together by our passion for STEM
          </p>
        </div>

        <div className="cards-grid">
          <ExpandableCard 
            title="OUR VISION!" 
            content="Vision content goes here" 
          />
          <ExpandableCard 
            title="OUR MISSION!" 
            content="Mission content goes here" 
          />
          <ExpandableCard 
            title="OUR MOTTO!" 
            content="Motto content goes here" 
          />
        </div>

        <div className="schools-section">
          <h2 className="schools-title">We are from...</h2>
          <div className="schools-grid">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '0.5rem'
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>

        <div className="partners-section">
          <h2 className="partners-title">Our Partners</h2>
          <div className="partners-scroll">
            <button 
              className="scroll-button scroll-button-left"
              onClick={() => scrollPartners('left')}
            >
              ←
            </button>
            <button 
              className="scroll-button scroll-button-right"
              onClick={() => scrollPartners('right')}
            >
              →
            </button>
            <div 
              ref={partnersRef}
              className="partners-container"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: '16rem',
                    height: '8rem',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '0.5rem'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

