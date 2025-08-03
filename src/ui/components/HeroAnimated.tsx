"use client"
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { Leaf, Clock } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const fadeX = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: custom, 
      duration: 1.5, 
      // ease: [.31,.14,.17,1.87],
      // ease: [0.68,-0.55,0.27,1.55],
      ease: [0.34, 1.56, 0.64, 1]
    }
  })
}

export default function HeroAnimated() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25 py-24 md:py-32 to-background h-[85vh] flex flex-col items-center justify-center">
          
      {/* Video bg here */}
      <div className="absolute inset-0 text-center z-[-10] mx-auto max-w-7xl max-h-dvh">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="https://ucarecdn.com/867cab5c-bdaf-42b4-ade2-da7e53572d9c/Animacionpaginaweb_2opt.mp4" type="video/mp4" />
        </video>
      </div>
          
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-1 lg:gap-12">

          {/* Hero Title and Button */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 gap-10 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeX}
            custom={0}
          >
            {/* Main Hero Title */}
            <div 
              className="space-y-4 text-center">
              {/* <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Lanzamiento Web!
              </div> */}
              
              <h1 className="text-5xl md:text-7xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-8 lg:px-18" >
              Descubre lo magnífico de {" "} Construir <i className="remarkWord">Sueños</i>
              </h1>
            </div>

            {/* Asesoria Button  */}
            <motion.div 
              className="flex flex-col gap-6 center sm:justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeX}
              custom={0.8}
            >
              <Link href="/contact">
                <Button variant="default" size="lg" className="h-12 uppercase px-8">
                  Solicitar Asesoría
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="hidden h-12 uppercase">
                  Solicitar Asesoría
                </Button>
              </Link>
              
            </motion.div>

                
            {/* Icons and text maybe whatsapp connections, if client req 
            
          STATUS HIDDEN For sale*/}
            <motion.div 
              className=" flex flex-wrap items-center justify-center gap-5 text-sm text-primary/60"
              initial="hidden"
              animate="visible"
              variants={fadeX}
              custom={1.2}
              >
              <div className="flex items-center gap-1.5">
                <Leaf className="h-5 w-5 text-primary/70" />
                <span>Uso sustentable de materiales</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-5 w-5 text-primary/70" />
                <span>24/7 Atención al cliente</span>
              </div>
            </motion.div>
              
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Scroll Indicator For sale*/}
      <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-accent-foreground animate-bounce"
      initial={{ opacity: 0, y: -20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 1, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-normal">Desliza para explorar</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  )
}
