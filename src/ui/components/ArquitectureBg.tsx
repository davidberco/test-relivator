'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShimmeringText } from '../primitives/shimmeringText';

export default function ArquitectureBg() {
  return (
    <section id="" className="relative overflow-hidden w-full aspect-[16/9] flex flex-col items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-[-10] flex items-center justify-center">            
        <Image
          src={"/arquitectePlanBg@2x.webp"}
          width={1000}
          height={1000}
          alt="isotype inovac"
          className="w-full h-[75dvh] object-cover opacity-80"
          loading="eager"   
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div 
          className="flex flex-col items-center text-center p-18"
        >
          <h2 className=" text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-normal text-foreground ">
          Pero convertirlo en realidad
          </h2>
          <ShimmeringText 
            text="puede ser un desafío abrumador."
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-normal "
            duration={1.7}
            wave={true}
            color="var(--color-neutral-900)"
            shimmeringColor="var(--color-stone-300)"
            inViewOnce={true}
          />
        </div>
      </div>
    </section>
  )
}
