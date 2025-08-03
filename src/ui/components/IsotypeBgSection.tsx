'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function IsotypeBgSection() {
  return (
    <section id="features" className="relative py-12 md:py-16 overflow-hidden w-full aspect-[16/9]">
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 z-[-10] opacity-90"
        initial={{ skewX: -6 }}
        animate={{ skewX: 0 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      >
        {/* Image with overlay for better text contrast */}
        <img
          src={"./isotypeInovacBg@2x.webp"}
          alt="isotype inovac"
          className="w-full h-full object-cover"
          loading="eager"   
        />
      </motion.div>

      {/* Content Container */}
      <div 
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-left justify-center h-full"
        
      >
        <div className="mb-8 flex flex-col items-left text-center md:text-left p-25 md:pr-[45dvw]">
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground md:text-end "
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { 
                delay: 1, 
                duration: 1, 
                ease: [.44,.44,.31,1.44]
              }
            }}  
          >
          Has imaginado ese proyecto muchas veces 
          </motion.h2>
        </div>
      </div>
    </section>
  )
}