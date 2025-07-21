import {  Clock, ShoppingBag, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";

import { services, testimonials } from "~/app/mocks";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { TiltEffect } from "~/ui/components/TiltEffect";
import { cn } from "~/lib/utils";
import { Avatar, AvatarImage } from "~/ui/primitives/avatar";
import { TestimonialsSection } from "~/ui/components/testimonials/testimonials-with-marquee";


export default function HomePage() {
  return (
    <>
      <main className="">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25  to-background h-[65vh] flex flex-col items-center justify-center">
          
          <div className="relative mx-auto aspect-[4/3] w-full max-w-6xl overflow-hidden center-0">
            <div className="relative inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            <Image
              src={'/sketchHouseWhite.jpg'}
              alt="curved building bg"
              fill
              sizes=""
              className="object-cover opacity-75"
              priority
            />
          </div>

          {/* Hero Title and Button */}
          <div className="relative justify-center space-y-6 gap-10 items-center p-8">
            {/* Main Hero Title */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-4 md:px-12 lg:px-18" >
              La excelencia de una marca está en sus  {" "}
              <i className="remarkWord">Clientes</i>
              </h1>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"/>
          <div className="hidden relative justify-center space-y-6 gap-10 items-center ">
            <div className="space-y-4 text-center">
              <p className="text-left md:text-center text-md sm:text-xl md:text-3xl font-semibold leading-normal pl-20 sm:pl-18 md:pl-20 px-8">
              Te mostramos nuestro portafolio con varios de nuestros proyectos.
              </p>
              <p className="text-center text-sm sm:text-lg md:text-2xl font-semibold leading-normal pl-12 sm:pl-18 md:pl-20 px-8"> 
              </p>
            </div>
          </div>
        </section>
        
        {/* Content Container */}
        <section className="relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Portafolio 
              </h2>
            </div>
          </div>

          <div className="relative justify-center items-center pt-8">
            <div className="text-center">
              <p className="text-center  text-md sm:text-xl md:text-3xl font-semibold leading-normal px-8">
              Te mostramos nuestro portafolio con varios de nuestros proyectos.
              </p>
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
                Aquí podrás ver la fusión de servicios que ofrecemos.
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        {/* Portafolio Section */}
        <section className="py-12 ">
          <div className="mx-auto px-12 md:px-18">  
            {/* Residencial */}
            <div id="residencial"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-4 items-center justify-between py-8"
            >
              {/* TITLE 1 */}
              <h2  className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                Residencial
              </h2>
              {/* Service Background Image */}
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
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
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Residencia Córdova Hernández
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Residencia Proaño Córdova
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Edificio SINAI
                </li>
              </div>
            </div>

            {/* Corporativo */}
            <div id="corporativo"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-8 items-center justify-between py-8"
            >
              {/* TITLE 1 */}
              <h2 className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                Corporativo 
              </h2>
              {/* Service Background Image */}
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
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
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Larco Visión. Clínica oftalmológica
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Elicrom. Sede Quito
                </li>
              </div>
            </div>

            {/* Arquitecura y Planificacion */}
            <div id="planificacion"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-8 items-center justify-between py-8"
            >
              {/* TITLE 1 */}
              <h2 className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                Arquitectura y Planificación 
              </h2>
              {/* Service Background Image */}
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
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
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Diseño comercial Pizza 593
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Diseño comercial Food Truck
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  Diseño de mobiliario lúdico infantil
                </li>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials vertical version*/}
        <section className="hidden py-8 md:py-12">
          {/* title tesimonios */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="py-4 md:py-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Testimonios 
              </h2>
            </div>
          </div>

          {/* Cards with testimonials */}
          <div className=" mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <div className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-col">

                  {/* Testimonial 1 */}
                  <div
                    className={cn(
                      "flex flex-col rounded-lg border-t shadow-md",
                      "bg-gradient-to-b from-muted/50 to-muted/90",
                      "p-6 text-start md:p-8",
                      "hover:from-muted/100 ",
                      "max-w-[320px] sm:max-w-[320px] md:max-w-[640px]",
                      "transition-colors duration-300",
                      "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonials[0].author.avatar} alt={testimonials[0].author.name} />
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md font-semibold leading-none">{testimonials[0].author.name}</h3>
                        <p className="text-sm text-muted-foreground mt-0">{testimonials[0].author.handle}</p>
                      </div>
                    </div>
                    <p className="sm:text-md mt-4 text-sm text-muted-foreground text-justify">{testimonials[0].text}</p>
                  </div>
                  {/* Testimonial 2 */}
                  <div
                    className={cn(
                      "flex flex-col rounded-lg border-t shadow-md",
                      "bg-gradient-to-b from-muted/50 to-muted/90",
                      "p-6 text-start md:p-8",
                      "hover:from-muted/100 ",
                      "max-w-[320px] sm:max-w-[320px] md:max-w-[640px]",
                      "transition-colors duration-300",
                      "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonials[1].author.avatar} alt={testimonials[1].author.name} />
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md font-semibold leading-none">{testimonials[1].author.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{testimonials[1].author.handle}</p>
                      </div>
                    </div>
                    <p className="sm:text-md mt-4 text-sm text-muted-foreground text-justify">{testimonials[1].text}</p>
                  </div>
                  {/* Testimonial 3 */}
                  <div
                    className={cn(
                      "flex flex-col rounded-lg border-t shadow-md",
                      "bg-gradient-to-b from-muted/50 to-muted/90",
                      "p-6 text-start md:p-8",
                      "hover:from-muted/100 ",
                      "max-w-[320px] sm:max-w-[320px] md:max-w-[640px]",
                      "transition-colors duration-300",
                      "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonials[2].author.avatar} alt={testimonials[2].author.name} />
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md font-semibold leading-none">{testimonials[2].author.name}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{testimonials[2].author.handle}</p>
                      </div>
                    </div>
                    <p className="sm:text-md mt-4 text-sm text-muted-foreground text-justify">{testimonials[2].text}</p>
                  </div>
                  {/* Testimonial 4 */}
                  <div
                    className={cn(
                      "flex flex-col rounded-lg border-t shadow-md",
                      "bg-gradient-to-b from-muted/50 to-muted/90",
                      "p-6 text-start md:p-8",
                      "hover:from-muted/100 ",
                      "max-w-[320px] sm:max-w-[320px] md:max-w-[640px]",
                      "transition-colors duration-300",
                      "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonials[3].author.avatar} alt={testimonials[3].author.name} />
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md font-semibold leading-none">{testimonials[3].author.name}</h3>
                        <p className="text-sm text-muted-foreground mt-3">{testimonials[3].author.handle}</p>
                      </div>
                    </div>
                    <p className="sm:text-md mt-4 text-sm text-muted-foreground text-justify">{testimonials[3].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials carousel version*/}
        <section className="py-12 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* title tesimonios */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
              <div className="py-4 md:py-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Testimonios 
                </h2>
              </div>
            </div>

            <TestimonialsSection
              title=""
              description="La opinión de nuestros clientes es fundamental para nosotros. Aquí te presentamos algunos testimonios que reflejan la calidad y dedicación que ponemos en cada proyecto."
              testimonials={testimonials}
              className="py-0"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className=" py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-primary/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Construyamos juntos un espacio que sea un reflejo de tu visión
                </h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Contáctanos, No dejes tu proyecto en manos del azar. Construyamos juntos un espacio que sea un reflejo de tu visión y un compromiso con el futuro.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="h-12 px-8">
                      Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
