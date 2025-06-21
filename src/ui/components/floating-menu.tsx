"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "~/ui/primitives/button";
import { cn } from "~/lib/utils";

// Using react-icons instead of lucide (installed via package.json)
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { CompanyLogoSVG } from "~/ui/icons/company-logo-svg";
import { transform } from "typescript";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

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
        delay: 0.05
      }
    }
  }

  const textVariants = {
    rest: { 
      rotate: 0,
      opacity: 0.9
    },
    hover: {
      rotate: 7,
      opacity: 1,
      transform: "translateY(-4px)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="fixed left-4 bottom-1/4 z-40">
      {/* Rectangular menu button */}
     
      <motion.div
        variants={logoVariants}
        initial="rest"
        whileHover="hover">
        <Button
          onClick={toggleMenu}
          className={cn(
            "h-50 px-6 py-2 rounded-lg shadow-lg transition-all",
            "text-primary",
            "flex flex-col items-center gap-18",
            "cursor-pointer",
          )} 
          variant={"outline"}
          size={"icon"}
        >
          {/* Company Logo */}
          <motion.div variants={logoVariants}
          initial="rest"
          whileHover="hover">
          <CompanyLogoSVG className="h-8 w-auto size-4" />
          </motion.div>
          
          <motion.span 
            variants={textVariants}
            initial="rest"
            whileHover="hover"
            className="text-xs sm:text-sm font-medium uppercase -rotate-90 origin-center" 
            >
            MENU
          </motion.span>

          {/* {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} */}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-40 bg-background/80 backdrop-blur-md",
              "flex flex-col overflow-y-auto",
              "p-4 sm:p-6 md:p-8",
              "max-h-screen"
            )}
          >
            {/* Close button in top right corner */}
            <div className="fixed flex justify-end p-4 top-0 right-0">
              <Button
                onClick={toggleMenu}
                size="icon"
                variant="ghost"
                className={cn(
                  "bg-accent h-14 w-14 rounded-full", // Larger size
                  "hover:bg-accent/75", // Subtle hover effect
                  "text-primary ",
                  "border border-primary hover:border-primary/45", // Subtle border
                  "transition-all duration-200" // Smooth transitions
                  
                )}
              >
                <X className="size-5" strokeWidth={2}/>
              </Button>
            </div>

            <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 space-y-8 mt-8">
              {/* Servicios Section */}
              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Servicios</h2>
                <ul className="pt-4 sm:pt-6">
                  <li>
                    <Link href="/services#diseno" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Diseño
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#construccion" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Construcción
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#remodelacion" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Remodelación
                    </Link>
                  </li>
                </ul>
              </motion.section>

              <div className="border-t border-gray-200 my-6"></div>

              {/* Portafolio Section */}
              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Portafolio</h2>
                <ul className="pt-4 sm:pt-6">
                  <li>
                    <Link href="/portafolio#residencial" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Residencial
                    </Link>
                  </li>
                  <li>
                    <Link href="/portafolio#corporativo" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Corporativo
                    </Link>
                  </li>
                  <li>
                    <Link href="/portafolio#planificacion" className="block rounded-md py-2 px-3 text-base sm:text-lg transition-all duration-200 
                    hover:bg-accent/80 hover:text-primary hover:shadow-md" onClick={toggleMenu}>
                      Planificación
                    </Link>
                  </li>
                </ul>
              </motion.section>

              <div className="border-t border-gray-400 my-6"></div>

              {/* Contact Section */}
              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.3 }}
                className=" flex flex-col items-center justify-center"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-primary">Contáctanos</h2>
                <div className="flex m-4 items-center">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4 ">
                    <FaInstagram className="h-12 w-12" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4">
                    <FaYoutube className="h-12 w-12" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4">
                    <FaFacebook className="h-12 w-12" />
                  </a>
                </div>
                <div className="space-y-4 text-base sm:text-lg flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="font-bold">Teléfono: (+593) 0999 828 558</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="font-bold">
                      <a href="mailto:info@inovaconstrucciones.com">info@inovaconstrucciones.com</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="font-bold">Dirección: Av. Libertadores E23-21 y calle N</span>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}