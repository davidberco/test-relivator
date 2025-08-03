'use client';
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "~/ui/primitives/button";
import { Phone, Mail, MapPinned } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "../icons/whatsapp";
import { InstagramIcon } from "../icons/instagram";
import { FacebookIcon } from "../icons/facebook";
import { motion } from 'motion/react';

  const logoVariants = {
    rest: { 
      scale: 1,
      opacity: 0.9
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 8
      }
    }
  }


export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-accent", className)}>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Container 1 footer */}
        <div className="grid grid-rows-1 md:grid-cols-3 gap-8 px-12 pb-12 border-b" >
          {/* logo Inovac black */}  

         

          <motion.div className="row-start-1 md:col-start-1 items-center justify-center flex"
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
          >
            <Image  
              src="/logoInovacBlack.svg"
              alt="Inovac Construcciones Logo"
              width={300}
              height={81}
              className="object-cover max-w-[150px] md:min-w-[300px]" />
          </motion.div>

          {/* Links */}
          <div className="row-start-2 md:row-start-1 md:col-start-2 md:col-span-2 space-y-4 text-base sm:text-lg items-center justify-center flex flex-col">
          {/* Visitar otras secciones Links */}
            
              <h3 className="mb-4 text-md font-semibold">Visita otras secciones</h3>
              <ul className="space-y-2 text-md flex flex-row gap-4 flex-wrap">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portafolio"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Portafolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            
          </div>

        </div>

        {/* Container 2 footer */}
        <div className="grid grid-rows-1 md:grid-cols-3 gap-8 px-12">

          {/* Contact information */}
          <div className="row-start-2 space-y-4 text-base sm:text-lg flex flex-col ">
            
            {/* Contactanos Button  */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="uppercase h-12 px-8">
                  Contáctanos
                </Button>
              </Link>
            </div>
            {/* Contact information like email, phone etc */}
            <ul className="list-none p-6">  
              <li className="flex items-center gap-4 mb-8">
                <Phone className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
                <h2 className="text-muted-foreground text-md  font-normal tracking-tight capitalize">
                  (+593) 999 828 558
                </h2>
              </li> 
              <li className="flex items-center gap-4 mb-8">
                <Mail className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
                <h2 className="text-muted-foreground text-md  font-normal tracking-tight ">
                  <a href="mailto:info@inovaconstrucciones.com">info@inovaconstrucciones.com</a>
                </h2>
              </li> 
              <li className="flex items-center gap-4 mb-8">
                <MapPinned className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
                <h2 className="text-muted-foreground text-md  font-normal tracking-tight ">
                  Valle de los Chillos, Quito – Ecuador.
                </h2>
              </li> 
            </ul>
          </div>

          {/* social media icons and proveedor */}
          <div className="row-start-1 md:row-start-2 col-start-1 md:col-start-2 md:col-span-2 items-center justify-start flex flex-col">

          {/* My approach */}
          <div className="space-x-6 items-center p-6">
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md "
            >
              <WhatsAppIcon className="h-24 w-24 scale-150" />
              <span className="sr-only">Whatsapp</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md "
            >
              <InstagramIcon className="h-24 w-24 scale-150" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md"
            >
              <FacebookIcon className="h-24 w-24 scale-150" />
              <span className="sr-only">Facebook</span>
            </Button>
            
          </div>

            <ul className="list-none p-6 items-center justify-center flex flex-col">  
              <li className="flex items-center gap-4 mb-8">
                <h2 className="text-muted-foreground text-md  font-semibold tracking-tight capitalize">
                  ¿Eres proveedor? Puedes contactarnos aquí
                </h2>
                
              </li> 
              <li className="flex items-center gap-4 mb-8">
                <h2 className="">
                <Link href="mailto:info@inovaconstrucciones.com">
                  <Button size="lg" className="uppercase h-12 px-8">
                    proveedores
                  </Button>
                </Link>   
                </h2>
              </li>   
            </ul>
          </div>
          
        </div>

        {/* Copyright, bercostudio, privacy, terms  */}
        <div className="mt-6 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 ">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <p>Web Development by {" "}
              <Link href="https://www.bercostudio.com" target='_blank' className="hover:text-yellow-500 font-bold">
                BercoStudio
              </Link></p>

              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              
              
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Inovac Construcciones. Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

