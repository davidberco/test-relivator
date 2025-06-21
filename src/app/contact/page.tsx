import { ArrowRight, Car, Clock, ShoppingBag, Star, Truck, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProductCard } from "~/ui/components/product-card";
import { TestimonialsSection } from "~/ui/components/testimonials/testimonials-with-marquee";
import { Button } from "~/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/primitives/card";
import { categories, featuredProducts, services, testimonials } from "~/app/mocks";
import { Carousel } from "~/ui/components/carousel";
import { Carouselmp, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator } from "~/ui/primitives/carouselmp";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import ContactForm from "~/ui/primitives/contact-form";

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

export default function HomePage() {
  return (
    <>
      <main className="">
        {/* Isotype background section */}
        <section id="features" className="relative py-12 md:py-16 overflow-hidden w-full aspect-[16/9]">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-[-10] opacity-70">
            {/* Image with overlay for better text contrast */}
            {/* <div className="absolute inset-0 z-10"></div> */}
            <img
              src={"./isotypeInovacBg@2x.webp"}
              alt="isotype inovac"
              className="w-full h-full object-cover"
              loading="eager"   
            />
          </div>

          {/* Content Container */}
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-left justify-center h-full">
            <div className="mb-8 flex flex-col items-left text-center md:text-left p-25 md:pr-[45dvw]">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground md:text-end ">
              Contáctanos 
              </h2>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="features" className="py-8"> 
          <div className="mb-8 pr-20 pl-20 items-center text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Envíanos un mensaje
            </h2>
          </div>
          <ContactForm />  
        </section>
        
        {/* Text Decorated Box: nuestra mision es transf... */}
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
                ¿Lo tienes en mente?
              </h2>
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                Construyámoslo
              </h2>
            </div>
          </div>
          
          {/* Asesoria Button  */}
          <div className="flex gap-6 flex-row center justify-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Solicitar Asesoría
              </Button>
            </Link>
          </div>
        </section>

        
      </main>
    </>
  );
}
