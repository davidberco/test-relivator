'use client';
import { DecoratedTextBox } from "./decoratedTextBox";
import { Button } from "~/ui/primitives/button";
import Link from "next/link";
import { motion } from "motion/react";
import { RollingText } from "../primitives/rollingText";

export default function BracketsTitle() {
  return (
    <section id="features" className="py-12 md:py-16">
      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture@2x-100.jpg')] bg-cover bg-no-repeat bg-center opacity-75">
        </div>
    
        {/* Decorated Text Component */}
        <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
          <DecoratedTextBox className="">
            <h2 className="text-md md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
            <RollingText 
              text="Un lugar que refleje tus aspiraciones y valores."
              inViewMargin="0px"
            />
            </h2>
          </DecoratedTextBox>
        </div>
      </div>
      {/* Asesoria Button  */}
      <motion.div className="flex flex-col gap-6 justify-center items-center"
        initial={{ opacity: 0,  scaleX: 1.1 }}
        animate={{ opacity: 1,  scaleX: 1 }}
        transition= {{
          duration: 1,
          ease: 'easeInOut',
          delay: 1.5

        }}
      >
        <Link href="/contact">
          <Button variant="default" size="lg" className="h-12 px-8 uppercase">
            Solicitar Asesoría
          </Button>
        </Link>
      </motion.div>
    </section>

  )}