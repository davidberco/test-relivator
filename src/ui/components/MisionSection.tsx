'use client';
import { DecoratedTextBox } from "./decoratedTextBox";
import { Button } from "~/ui/primitives/button";
import Link from "next/link";
import { motion } from "motion/react";
import { RollingText } from "../primitives/rollingText";
import { TypingText } from "../primitives/typingEffect";

export default function BracketsTitle() {
  return (
    <section id="features" className="py-8">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture@2x-100.jpg')] bg-cover bg-no-repeat bg-center opacity-75">
        </div>
    
        {/* Decorated Text Component */}
        <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
          <DecoratedTextBox className="">
            <h2 className="text-md md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
              
                Nuestra misión es transformar cada idea, cada sueño en una realidad tangible y de alto impacto.

             
            </h2>
          </DecoratedTextBox>
        </div>
      </div>

      {/* Lo tienes mente, construyamoslo... */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 pr-20 pl-20 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            <TypingText text="¿Lo tienes en mente?"/>
          </h2>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            <TypingText 
              text="Construyámoslo"
              inView= { true}
              inViewOnce={ false}
              delay={ 4 }  
              loop={false} 
            />
          </h2>
        </div>
        
       
      </div>
      
      {/* Asesoria Button  */}
      <div className="flex gap-6 flex-row center justify-center">
        <Link href="/contact">
          <Button variant="default" size="lg" className="h-12 px-8 uppercase">
            Agenda una cita
          </Button>
        </Link>
      </div>
    </section>
  );
}