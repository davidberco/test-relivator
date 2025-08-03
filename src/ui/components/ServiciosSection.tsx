'use client'
import { TiltEffect } from "~/ui/components/TiltEffect";
import { Button } from "~/ui/primitives/button";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "~/app/mocks";

export default function ServiciosSection() {

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto  px-6 md:px-8 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Conoce más de nuestros servicios
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          <p className="mt-4 max-w-2xl text-center text-muted-foreground">
            Descubre cómo <strong>Inovac</strong> puede transformar tu visión en realidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative flex flex-col items-center justify-between rounded-xl border bg-card shadow-sm transition hover:shadow-md"
            >
              {/* Top Block with Background Image */}
              <div className="relative w-full aspect-[1/1]  ">
                <TiltEffect 
                rotationFactor={12} // adjust rotation factor for tilt effect 
                isReverse={true} // reverse the tilt direction
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} // enable 3D scaling effect
                className="w-full h-full">
                
                
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                />
              
              
                {/* Title */}
                <div className="absolute inset-0 z-10 flex items-start justify-center">
                  <h3 className="text-black mt-2 text-3xl font-bold">{service.name}</h3>
                </div>
                </TiltEffect>

                {/* SVG Border Bottom */}
                <div className="absolute z-20 w-[100%] bottom-0 translate-y-[25%]">
                  <Image
                    src="/svg-bracket-bottom.svg" // ← replace with your SVG
                    alt=""
                    width={400}
                    height={70}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Asesoria Button  */}
              <div className="flex flex-col sm:flex-row center sm:justify-center p-6 pt-10">
                <Link href={service.linkService}>
                  <Button variant="default" size="default" className="h-12 px-6 uppercase">
                    Conocer más
                  </Button>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* final title */}
        <div className="m-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cada gran proyecto comienza con un primer paso,
          </h2>
          <div className="mt-2 h-1 w-[25%] rounded-full bg-primary/50" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-4 max-w-2xl text-center text-muted-foreground">
            no dejes que tus sueños se queden en el papel.
          </h2>
        </div>
        {/* Asesoria Button  */}
        <div className="flex gap-6 flex-row center justify-center">
          <Link href="http://wa.me/593999828558?text=Saludos,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="h-12 px-8 uppercase">
              <FaWhatsapp className="h-12 w-12" />
              Agenda una cita
            </Button>
          </Link>
        </div>
      </div>
    </section>


  )
}