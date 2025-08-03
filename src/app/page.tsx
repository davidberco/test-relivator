import { ArrowRight, Car, Clock, ShoppingBag, Star, Truck,  ArrowDown, Leaf, Scroll, Brackets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import United24Banner from "~/ui/components/banners/u24";
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
import { categories, featuredProducts, services, testimonials } from "./mocks";
import { Carousel } from "~/ui/components/carousel";
import { Carouselmp, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator } from "~/ui/primitives/carouselmp";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import ClientVision from "~/ui/components/ClientVisionSection";
import NosotrosTransformamosSection from "~/ui/components/NosotrosTransformamosSection";
import { TiltEffect } from "~/ui/components/TiltEffect";
import ElicromSection from "~/ui/components/ElicromSection";
import { FaWhatsapp } from "react-icons/fa";
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import HeroAnimated from "~/ui/components/HeroAnimated";
import ScrollRevealSection from "~/ui/components/ScrollRevealSection";
import IsotypeBgSection from "~/ui/components/IsotypeBgSection";
import ArquitectureBg from "~/ui/components/ArquitectureBg";
import BracketsTitle from "~/ui/components/BracketsTitle";
import MisionSection from "~/ui/components/MisionSection";
import ServiciosSection from "~/ui/components/ServiciosSection";
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
        {/* Hero Section */}
        <United24Banner animateGradient={false} showCloseButton={true} />
        <HeroAnimated />

        <ScrollRevealSection delay={0.3} duration={0.7} yOffset={40} once={false} easing={ 'easeOut' } className="relative">
          {/* Isotype background section */}
          <IsotypeBgSection />
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.6} duration={0.7} yOffset={-40} once={false} easing={ 'easeOut' } className="relative">
          {/* Arquitecture Plan bg Image section */}
          <ArquitectureBg />
        </ScrollRevealSection>

        {/* Text Decorated Box No se trata de construir*/}
        <section id="features" className="py-12 md:py-16">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">

            {/* Decorated Text Component */}
            <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-thin tracking-normal px-[10] md:px-[30] lg:px-[50] ">
                No se trata de construir únicamente, sino de crear un espacio con: <p className="text-stone-800 font-normal animate-fadeInScale ">Propósito.</p>
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        {/* Section Buscas Un Entorno */}
        <section className="">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Title: Buscas Un entorno */}
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl mb-8">
                Buscas un entorno:
              </h2>
            </div>
            
            {/* Grid with images */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/services?category=${category.name.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md "
                  aria-label={`Browse ${category.name} services`}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/15 to-transparent" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className={`absolute inset-0 z-10 flex ${category.labelStyle}`}>
                    <Image src={category.label} alt="" width={parseFloat(category.width)} height={parseFloat(category.heigth)} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Text Decorated Box Un lugar que refleje*/}
        <BracketsTitle />
        
        <ScrollRevealSection
          delay={0.3} duration={0.8} yOffset={40} once={false} easing={ 'easeOut' } className="relative"
        >
          {/* Client Vision Section */}
          <ClientVision />
        </ScrollRevealSection>
        
        <ScrollRevealSection
          delay={0.2} duration={0.8} yOffset={40} once={false} easing={ 'easeInOut' } className="relative"
        >
          {/* Nosotros Transformamos Section */}
          <NosotrosTransformamosSection />
        </ScrollRevealSection>

        <ScrollRevealSection
          delay={0} duration={0.8} yOffset={40} once={false} easing={ 'easeInOut' } className="relative"
        >
          <ElicromSection />   
        </ScrollRevealSection>      

        <ScrollRevealSection
          delay={ 0.3 } duration={ 0.8 } yOffset={ 40 } once={ false } easing= { 'easeInOut' } className="relative"
        >
        {/* Text Decorated Box: nuestra mision es transf... */}
          <MisionSection />
        </ScrollRevealSection>

        <ScrollRevealSection delay={ 0.3 } duration={ 0.8 } yOffset={ 40 } once={ false } easing= { 'easeInOut' } className="relative">
          {/* Services Section */}
          <ServiciosSection />
        </ScrollRevealSection>
        
        
{/* FROM HERE this components are originals and hidden by default */}

        {/* Featured Services */}    
        <section className=" hidden py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Conoce más de nuestros servicios
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Conoce más de nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos 
                <br />
                TO DELETE
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {services.map((category) => (
                <Link
                  key={category.name}
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                  aria-label={`Browse ${category.name} products`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative z-20 -mt-6 p-4">
                    <div className="mb-1 text-lg font-medium">
                      {category.name}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.linkService} this should be button to the service
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* Featured Categories */}
        <section className="hidden py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Shop by Category
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Find the perfect device for your needs from our curated
                collections
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                  aria-label={`Browse ${category.name} products`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative z-20 -mt-6 p-4">
                    <div className="mb-1 text-lg font-medium">
                      {category.name}
                    </div>
                    
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="hidden bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured Products
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Check out our latest and most popular tech items
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/products">
                <Button variant="outline" size="lg" className="group h-12 px-8">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="hidden py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose Us
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
                We offer the best shopping experience with premium features
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-none bg-background shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="hidden bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <TestimonialsSection
              title="What Our Customers Say"
              description="Don't just take our word for it - hear from our satisfied customers"
              testimonials={testimonials}
              className="py-0"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="hidden py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-primary/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to Upgrade Your Tech?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Join thousands of satisfied customers and experience the best
                  tech products on the market. Sign up today for exclusive deals
                  and offers.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/auth/sign-up">
                    <Button size="lg" className="h-12 px-8">
                      Sign Up Now
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" size="lg" className="h-12 px-8">
                      Browse Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel UI Aceternity */}
        <section className=" hidden bg-muted/50 py-12 md:py-16">
        <Carousel 
          slides={[
            {
              title: "Discover the Future of Tech",
              src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
              button: "Shop Now",
            },
            {
              title: "Unleash Your Creativity",
              src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
              button: "Get Inspired",
            },
            {
              title: "Stay Connected Anywhere",
              src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              button: "Learn More",
            },
          ]}
        />
        </section>

        {/* Carousel Motion-primitives */}
        <section className=" hidden bg-muted/50 py-12 md:py-16">
          <Carouselmp className="relative 
            left-1/4
            h-[70dvh] 
            aspect-[9/16]
            ">
            <CarouselContent className="">
              <CarouselItem className="aspect-[9/16] bg-blue-300 flex items-center justify-center">
                Image 1
              </CarouselItem>
              <CarouselItem className="aspect-[9/16] bg-green-100 flex items-center justify-center">
                Image 2
              </CarouselItem>
              <CarouselItem className="aspect-[9/16] bg-red-100 flex items-center justify-center">
                Image 3
              </CarouselItem>
            </CarouselContent>
          
            {/* Optional Navigation Controls */}
            <CarouselNavigation alwaysShow />
            
            {/* Optional Indicators */}
            <CarouselIndicator />
          </Carouselmp>
        </section>

      </main>
    </>
  );
}
