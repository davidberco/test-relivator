'use client'
import { ReactNode, useRef } from 'react'
import { useInView, motion, MotionProps } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | number[]
  className?: string
}

export default function ScrollRevealSection({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  once = true,
  easing = 'easeOut',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '0px 0px -100px 0px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: easing }}
      className={className}
    >
      {children}
    </motion.section>
  )
}