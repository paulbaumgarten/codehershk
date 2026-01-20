"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import './events.css'

export default function EventsPage() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="events-page">
      <motion.header 
        className="hero"
        style={{ y: parallaxY }}
      >
        <ScrollAnimation animation="fade">
          <h1 className="section-title">Current Events</h1>
        </ScrollAnimation>
      </motion.header>

      <section className="section">
        <div className="container">
          <ScrollAnimation animation="slide">
            <div className="grid">
              {['CodeHers 2025', 'Hackathon'].map((event, i) => (
                <motion.div
                  key={i}
                  className="event-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{event}</h3>
                  <div className="event-image" />
                  <div className="event-details">
                    <p>Date: February 2025</p>
                    <p>Location: Hong Kong</p>
                    <motion.button
                      className="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section instagram-section">
        <div className="container">
          <ScrollAnimation animation="fade">
            <h2 className="section-title">Catching up w/ CodeHers!</h2>
            <div className="instagram-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="instagram-post"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section timetable-section">
        <div className="container">
          <ScrollAnimation animation="scale">
            <div className="timetable-card">
              <h2>Event Schedule</h2>
              <div className="timetable">
                {['Introduction', 'Session 1', 'Lunch', 'Session 2', 'Closing'].map((item, i) => (
                  <motion.div
                    key={i}
                    className="timetable-row"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span>{`${9 + i * 2}:00`}</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

