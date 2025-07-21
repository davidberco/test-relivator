"use client"
import { ArrowRight, Car, Clock, ShoppingBag, Star, Truck, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/primitives/card";
import { aboutUsImages, categories } from "~/./app/mocks";
import { Carousel } from "~/ui/components/carousel";
import { Carouselmp, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator, CarouselAutoplayOnView } from "~/ui/primitives/carouselmp";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { TiltEffect } from "~/ui/components/TiltEffect";
import { CompanyLogoSVG } from "~/ui/icons/company-logo-svg";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";


// Mock data for the Why Choose Us section
const features = [
  {
    title: "Free Shipping",
    description:
      "Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
    icon: <Truck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Secure Checkout",
    description:
      "Your payment information is always safe and secure with us. We use industry-leading encryption.",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our customer support team is always available to help with any questions or concerns.",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Quality Guarantee",
    description:
      "We stand behind the quality of every product we sell. 30-day money-back guarantee.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
];

export default function AboutPage() {

  const ref = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  // Track scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 20%"], 
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 500, damping: 20, mass: 0.1 });

  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (ref.current && targetRef.current) {
      const logoTop = ref.current.getBoundingClientRect().top;
      const targetTop = targetRef.current.getBoundingClientRect().top;
      setDistance(targetTop - logoTop);
    }
  }, []);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <> 
      <main className="">
        {/* Isotype and title SOBRe NOSOTROS section */}
        <section id="features" className="relative py-8 md:py-12 overflow-hidden w-full aspect-[16/9]">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-[-10] opacity-70">
            {/* Image with overlay for better text contrast */}
            {/* <div className="absolute inset-0 z-10"></div> */}
            <img
              src={"./inovacLogoAboutBg@2x.webp"}
              alt="isotype inovac"
              className="w-full h-full object-cover"
              loading="eager"   
            />
          </div>

          {/* Content Container */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Sobre Nosotros 
              </h2>
            </div>
          </div>
        </section>

        {/* Text INovac w/ Arquitecture Plan bg Image section */}
        <section id="" className="relative overflow-hidden h-full flex flex-col items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-[-10] flex items-center justify-center">            
            <Image
              src={"/arquitectePlanBg@2x.webp"}
              width={2000}
              height={2000}
              alt="isotype inovac"
              className="object-cover grayscale opacity-25"
              loading="eager"   
            />
          </div>

          {/* Text */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center text-center p-18">
              <p className="text-md md:text-xl font-normal md:font-semibold tracking-wide my-2 md:my-6">
              Desde su fundación, INOVAC ha desafiado los límites convencionales del diseño y construcción, incorporando innovación y creatividad en cada uno de nuestros proyectos con nuevas tecnologías y técnicas de construcción para lograr resultados sorprendentes.
              </p>
              <p className="text-md md:text-xl font-normal md:font-semibold tracking-wide my-2 md:my-6">
              Como empresa nos enorgullece nuestra capacidad para diseñar espacios únicos y personalizados que reflejan las necesidades y aspiraciones de nuestros clientes. Pues en el dinámico mundo de la arquitectura y construcción en Ecuador, nos destacamos por ser una empresa innovadora que ha demostrado su pasión y creatividad a través de proyectos que trascienden.
              </p>

            </div>
          </div>
        </section>

        {/* 3 boxes to display images */}
        <section className=" py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Shop by Category
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Find the perfect device for your needs from our curated
                collections
              </p>
            </div> */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {aboutUsImages.map((aboutUsImages) => (
                <div
                  key={aboutUsImages.name}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                  aria-label={`Browse ${aboutUsImages.name} products`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                    <Image
                      src={aboutUsImages.image}
                      alt={aboutUsImages.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Images and text with isotype animated in background */}
        <section ref={ref} className="relative w-full overflow-hidden py-12 md:py-16">
          {/* Isotype animated bg 1 */}
          <motion.div 
            ref={ref}
            style={{ rotate, translateY, opacity}}
            className="absolute left-[13dvw]">
            <CompanyLogoSVG className="w-[25dvw] opacity-35"/>
          </motion.div>

          {/* Isotype animated bg 2 */}
          <motion.div 
            // style={{ rotate, translateY, opacity }}
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }} // Trigger when in viewport
            transition={{ ease: "easeOut", duration: 2 }}
            viewport={{ once: false, amount: 0.3 }} // `once` means run only once
            className="absolute left-[60dvw] bottom-30">
            <CompanyLogoSVG className="w-[25dvw] opacity-35"/>
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-4 grid-rows-2 gap-8 gap-y-12 items-center">
           
            {/* 1st — Text Block */}
            <div className="relative text-justify col-start-1 col-span-2 w-auto select-none">
              <p className="text-base md:text-xl font-semibold ml-8 md:ml-12">En INOVAC, nos dedicamos a diseñar y construir espacios innovadores y sostenibles que mejoran la calidad de vida de nuestros clientes. A través de un enfoque centrado en la calidad, la creatividad y la personalización, nos esforzamos por superar las expectativas, mientras promovemos prácticas responsables con el medio ambiente.</p>
              
            </div>
            {/* 1st — Image */}
            <div className="relative col-start-3 col-span-2">
              <TiltEffect
                className=""
                rotationFactor={10}
                isReverse={false}
                enable3D={false}
                springOptions={{ damping: 20, stiffness: 300 }}>
              <div className="relative z-10 aspect-[1/1] rounded-md overflow-hidden shadow-lg">
                <Image
                  src="/nosotros5.jpg" 
                  alt="Main Architectural Shot"
                  fill
                  className="object-cover"
                />
              </div>
              </TiltEffect>
            </div>

            {/* 2nd — Text Block */}
            <div  className="relative text-justify col-start-3 col-span-2 w-auto select-none">
              <p className="text-base md:text-xl font-semibold ml-8 md:ml-12">Nuestra visión es ser reconocidos como líderes innovadores en la industria del diseño y la construcción, transformando espacios con creatividad y funcionalidad, mientras promovemos la sostenibilidad y el bienestar de nuestros clientes.</p>
              
            </div>
            {/* 2nd — Image */}
            <div className="relative col-start-1 row-start-2 col-span-2">
              <TiltEffect
                className=""
                rotationFactor={10}
                isReverse={false}
                enable3D={false}
                springOptions={{ damping: 20, stiffness: 300 }}>
              <div className="relative z-10 aspect-[1/1] rounded-md overflow-hidden shadow-lg">
                <Image
                  src="/nosotros7.jpg" // Replace with real image
                  alt="Main Architectural Shot"
                  fill
                  className="object-cover"
                />
              </div>
              </TiltEffect>
            </div>
          </div>
        </section>

        {/* Text Decorated Box disenanmos el futuro...*/}
        <section id="features" className="py-12 md:py-16">
          <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture@2x-100.jpg')] bg-cover bg-no-repeat bg-center opacity-75">
            </div>
        
            {/* Decorated Text Component */}
            <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-md md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
                Diseñamos el futuro de la construcción

                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        {/* section Organigrama */}
        <section id="" className="py-4 md:py-8">
          <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="bg-[url('/logo Inovac Black.svg')]"> 
            </div>
              <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-extrabold tracking-normal md:text-4xl">
                  Organigrama
              </h2>
            </div>
          </div>       

          {/* Container for carousel */}
          <div className="relative overflow-hidden container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            {/* Carousel Motion-primitives */}
            <Carouselmp className="relative border-1 border-redinova"
              autoPlay
              interval={3000}
              >
              <CarouselContent className="">
                <CarouselItem className="aspect-[16/9] relative">
                  <Image
                    src="/organigrama1.png"
                    alt="Slide 1"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
                <CarouselItem className="aspect-[16/9] relative">
                  <Image
                    src="/organigrama2.png"
                    alt="Slide 2"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
                <CarouselItem className="aspect-[16/9] relative">
                  <Image
                    src="/organigrama3.png"
                    alt="Slide 3"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
                <CarouselItem className="aspect-[16/9] relative">
                  <Image
                    src="/organigrama4.png"
                    alt="Slide 4"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              {/* Optional Indicators */}
              <CarouselIndicator />
              <CarouselAutoplayOnView interval={3000} maxLoops={3} />
            </Carouselmp>
          </div> 
        </section> 
      </main>
    </>
  );
}
