"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './css/MiniNav.module.css'

interface NavItem {
  text: string
  sectionId: string
  highlight?: boolean
}

interface NavBarProps {
  items: NavItem[]
  style?: React.CSSProperties
  className?: string
  autoSlide?: boolean
  updateHash?: boolean
  fadeIn?: boolean
  fixedPlace?: boolean
}

export default ({ 
  items, 
  className = '', 
  autoSlide = false,
  updateHash = true,
  style = {},
  fadeIn = false,
  fixedPlace = true
}: NavBarProps) => {
	const [selected, setSelected] = useState(0)
	const [isFixed, setIsFixed] = useState(false)
	const navRef = useRef<HTMLElement>(null)
	const originalPositionRef = useRef<number>(null)
	const isScrollingRef = useRef(false)
	const userInitiatedRef = useRef(false)
	const scrollTimeoutRef = useRef<NodeJS.Timeout>(null)
	const lastScrollTime = useRef<number>(0)

	if (fixedPlace)
		useEffect(() => {
			const checkPosition = () => {
			if (!navRef.current) return
			
			if (originalPositionRef.current === null) {
				originalPositionRef.current = navRef.current.getBoundingClientRect().top + window.scrollY
			}
		
			const scrollPosition = window.scrollY
			setIsFixed(scrollPosition >= originalPositionRef.current)
			}
			checkPosition()

			window.addEventListener('scroll', checkPosition)
			window.addEventListener('resize', checkPosition)

			return () => {
			window.removeEventListener('scroll', checkPosition)
			window.removeEventListener('resize', checkPosition)
			}
		}, [])

	const getNearestSection = useCallback(() => {
		let nearest = 0
		let minDistance = Infinity

		items.forEach((item, index) => {
			const section = document.getElementById(item.sectionId)
			if (section) {
				const rect = section.getBoundingClientRect()
				const distance = Math.abs(rect.top)
				if (distance < minDistance) {
					minDistance = distance
					nearest = index
				}
			}
		})

		return nearest
	}, [items])

	useEffect(() => {
		const handleScroll = () => {
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current)
			}

			const now = Date.now()
			if (!userInitiatedRef.current) {
				const nearestSection = getNearestSection()
				setSelected(nearestSection)
			}

			scrollTimeoutRef.current = setTimeout(() => {
				if (autoSlide && 
						!userInitiatedRef.current && 
						!isScrollingRef.current && 
						now - lastScrollTime.current > 1000) {
					
					const nearestSection = getNearestSection()
					const section = document.getElementById(items[nearestSection].sectionId)
					
					if (section) {
						isScrollingRef.current = true
						lastScrollTime.current = now
						section.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						})
						setSelected(nearestSection)
						
						setTimeout(() => {
							isScrollingRef.current = false
						}, 1000)
					}
				}
				userInitiatedRef.current = false
			}, 500)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current)
			}
		}
	}, [items, autoSlide, getNearestSection])

	const handleClick = useCallback((index: number) => {
		userInitiatedRef.current = true
		const section = document.getElementById(items[index].sectionId)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' })
			setSelected(index)
			if (updateHash) {
				window.history.pushState(null, '', `#${items[index].sectionId}`)
			}
		}
	}, [items, updateHash])

	return (
		<motion.nav className={`${styles.nav} ${className} ${isFixed ? styles.fixed : ''}`} style={{...style, position: isFixed ? 'fixed' : 'static'}} ref={navRef} initial={{ opacity: (fadeIn ? 0 : 1) }} animate={{ opacity: 1 }} >
			{items.map((item, index) => (
				<button
					key={item.text}
					className={`${styles.navItem} ${item.highlight && styles.highlighted}`}
					onClick={() => handleClick(index)}
					style={{ color: index == selected ? '#fff' : '#000' }}
				>
				{selected === index && (
					<motion.div
						className={styles.background}
						layoutId="background"
						initial={false}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 35
						}}
					/>
				)}
				{item.text}
				</button>
			))}
			</motion.nav>
	)
}
