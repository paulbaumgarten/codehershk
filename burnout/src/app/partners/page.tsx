"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import './partners.css'

export default function PartnersPage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div className="partners-page">
      <motion.header 
        className="hero"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <ScrollAnimation animation="fade">
          <h1 className="section-title">Partner With Us</h1>
          <p className="hero-subtitle">Want to support CodeHers? Here's how...</p>
        </ScrollAnimation>
      </motion.header>

      <section className="section">
        <div className="container">
          <ScrollAnimation animation="slide">
            <div className="grid">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-number">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="card-title">Support Option {i + 1}</h3>
                  <p className="card-text">Description of support option...</p>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section partners-showcase">
        <div className="container">
          <ScrollAnimation animation="fade" delay={0.2}>
            <h2 className="section-title">Our Current Partners</h2>
            <div className="partners-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="partner-logo"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Partner {i + 1}
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <ScrollAnimation animation="scale">
            <div className="cta-card">
              <h2>Got Another Idea?</h2>
              <p>We're always open to new partnerships and collaborations.</p>
              <motion.button
                className="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Now
              </motion.button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

