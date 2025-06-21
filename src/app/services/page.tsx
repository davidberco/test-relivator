import { ArrowRight, Car, Clock, ShoppingBag, Star, Truck, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import United24Banner from "~/ui/components/banners/u24";
import { Button } from "~/ui/primitives/button";

import { categories, featuredProducts, services, testimonials } from "~/app/mocks";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { TiltEffect } from "~/ui/components/TiltEffect";
import ContactForm from "~/ui/primitives/contact-form";
import DisenoCardsSection from "~/ui/components/DisenoCardsSection";


export default function HomePage() {
  return (
    <>
      {/* Uncomment if the client pay for the banner option For sale */}
      {/* <United24Banner animateGradient={false} /> */}
      <main className="">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25 py-24 md:py-32 to-background h-[80vh] flex flex-col items-center justify-center">
          
          <div className="absolute mx-auto aspect-[9/16] w-full max-w-lg overflow-hidden right-0">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              <Image
                src={'/buildingCurveShapesBlackWhite.jpg'}
                alt="curved building bg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-75"
                priority
              />
            </div>

          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Image for the hero section just in large scrrens STATUS commented (hide) change lg:grid-cols-1 to cols 2 in the classname of div container to show items properly */}
              {/* <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border lg:block">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                <Image
                  src={'/buildingCurveShapesBlackWhite.jpg'}
                  alt="Shopping experience"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div> */}

              {/* Hero Title and Button */}
              <div className="col-span-2 md:col-span-3 col-start-1 flex flex-col justify-center space-y-6 gap-10 items-center">
                {/* Main Hero Title */}
                <div className="space-y-4 text-center">
                  
                  <h1 className="text-5xl md:text-7xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-4 md:px-12 lg:px-18" >
                  Diseñamos el futuro de la {" "}
                  <mark>Construcción</mark>
                  </h1>

                  <p className="text-left text-xl md:text-3xl font-semibold leading-normal pl-20 px-8">
                  Nuestros clientes obtienen una asesoría con ideas técnicas y profesionales en las áreas de diseño, construcción y remodelación 
                  </p>
                </div>
                
                {/* Icons and text maybe whatsapp connections, if client req STATUS HIDDEN For sale*/}
                <div className="hidden flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-5 w-5 text-primary/70" />
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-5 w-5 text-primary/70" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

          {/* Scroll Indicator For sale*/}
          <div className="hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-foreground animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold">Desliza para explorar</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Diseno Section */}
        <section id="diseno" className="py-12 md:py-16" >
          {/* section Service [0] DISENO */}
          <div className="mx-auto px-6 md:px-8">
            <div
              id={services[0].name}
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              {/* Title with brackets component */}
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-2">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50]">
                  {services[0].name}
                  </h2>
                </DecoratedTextBox>
              </div>

              {/* Service Background Image */}
              <div className="relative row-start-2 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  {/* Background Image */}
                  <Image
                    src={services[0].image}
                    alt={services[0].name}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              {/* Description */}
              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{services[0].description}</p>
              </div>
            </div>
          </div>

          <DisenoCardsSection />

          {/* final title */}
          <div className="m-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl m-4 max-w-2xl text-center text-muted-foreground">
              No dejes que tus sueños se queden en el papel.
            </h2>
          </div>
          {/* Asesoria Button  */}
          <div className="m-6 flex gap-6 flex-row center justify-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Solicitar Asesoría
              </Button>
            </Link>
          </div>
        </section>

        {/* Construccion Section */}
        <section id="construccion" className="py-12 md:py-16 ">
          {/* section Service [1] CONSTRUCCION */}
          <div className="mx-auto px-6 md:px-8">
            <div
              id={services[1].name}
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              {/* Title with brackets component */}
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-1">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50]">
                  {services[1].name}
                  </h2>
                </DecoratedTextBox>
              </div>

              {/* Service Background Image */}
              <div className="relative row-start-2 col-start-3 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  {/* Background Image */}
                  <Image
                    src={services[1].image}
                    alt={services[1].name}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              {/* Description */}
              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{services[1].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Remodelacion Section */}
        <section id="remodelacion" className="py-12 md:py-16 ">
          {/* section Service [1] REMODELACION */}
          <div className="mx-auto px-6 md:px-8">
            <div
              id={services[2].name}
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              {/* Title with brackets component */}
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-2">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50]">
                  {services[2].name}
                  </h2>
                </DecoratedTextBox>
              </div>

              {/* Service Background Image */}
              <div className="relative row-start-2 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  {/* Background Image */}
                  <Image
                    src={services[2].image}
                    alt={services[2].name}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              {/* Description */}
              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{services[2].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Text Decorated Box: construyamos juntos... */}
        <section id="features" className="py-8">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture@2x-100.jpg')] bg-cover bg-no-repeat bg-center opacity-75">
            </div>
        
            {/* Decorated Text Component */}
            <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-md md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
                Construyamos juntos un espacio que sea un reflejo de tu visión y un compromiso con el futuro.
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="features" className="py-8"> 
            <div className="mb-8 pr-20 pl-20 items-center text-center">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Comunícate con nosotros, estamos listos para asesorarte.
              </h2>
            </div>
          <ContactForm />  
        </section> 
      </main>
    </>
  );
}
