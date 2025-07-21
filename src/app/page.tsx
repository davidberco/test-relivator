import { ArrowRight, Car, Clock, ShoppingBag, Star, Truck, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import United24Banner from "~/ui/components/banners/u24";
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
      {/* Uncomment if the client pay for the banner option For sale */}
      {/* <United24Banner animateGradient={false} /> */}
      <main className="">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25  py-24 md:py-32 to-background h-[80vh] flex flex-col items-center justify-center">
          {/* <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]" /> */}
          
          {/* Video bg here */}
          <div className="absolute inset-0 text-center z-[-10] mx-auto max-w-7xl max-h-dvh">
            <video
              autoPlay
              // loop
              muted
              playsInline
              className="absolute inset-0 z-0 h-full w-full object-cover"
            >
              <source src="https://ucarecdn.com/dc9caea1-9458-499e-928c-6e4932015782/Animacionpaginaweb.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-1 lg:gap-12">
              {/* Image for the hero section just in large scrrens STATUS commented (hide) change lg:grid-cols-1 to cols 2 in the classname of div container to show items properly */}
              {/* <div className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-xl border lg:block">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                <Image
                  src="https://images.unsplash.com/photo-1624767735494-1929dc24ad43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Shopping experience"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div> */}

              {/* Hero Title and Button */}
              <div className="flex flex-col justify-center space-y-6 gap-10 items-center">
                {/* Main Hero Title */}
                <div className="space-y-4 text-center">
                  {/* <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Lanzamiento Web!
                  </div> */}
                  
                  <h1 className="text-5xl md:text-7xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-8 lg:px-18" >
                  Descubre lo magnífico de {" "}
                    {/* <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    </span> */}
                      Construir <i className="remarkWord">Sueños</i>
                  </h1>

                  {/* <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                  No se trata de construir únicamente, sino de crear un espacio con propósito.
                  </p> */}
                </div>

                {/* Asesoria Button  */}
                <div className="flex flex-col gap-6 sm:flex-row center sm:justify-center">
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
              Has imaginado ese proyecto muchas veces 
              </h2>
            </div>
          </div>
        </section>

        {/* Arquitecture Plan bg Image section */}
        <section id="" className="relative overflow-hidden w-full aspect-[16/9] flex flex-col items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-[-10] flex items-center justify-center">            
            <Image
              src={"/arquitectePlanBg@2x.webp"}
              width={2000}
              height={2000}
              alt="isotype inovac"
              className="w-full h-[75dvh] object-cover grayscale"
              loading="eager"   
            />
          </div>

          {/* Content Container */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center text-center p-18">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-normal text-foreground ">
              Pero convertirlo en realidad <br /> puede ser un desafío abrumador. 
              </h2>

            </div>
          </div>
        </section>

        {/* Text Decorated Box No se trata de construir*/}
        <section id="features" className="py-12 md:py-16">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">

            {/* Decorated Text Component */}
            <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-thin tracking-normal px-[10] md:px-[30] lg:px-[50]">
                No se trata de construir únicamente, sino de crear un espacio con: <p className="text-stone-800 font-normal">Propósito.</p>
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
              <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl mb-8">
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
        <section id="features" className="py-12 md:py-16">
          <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture@2x-100.jpg')] bg-cover bg-no-repeat bg-center opacity-75">
            </div>
        
            {/* Decorated Text Component */}
            <div className="mb-8 px-8 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-md md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
                Un lugar que refleje tus aspiraciones y valores.
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
          {/* Asesoria Button  */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Solicitar Asesoría
              </Button>
            </Link>
          </div>
        </section>

        {/* Text: En Inovac sabemos que...  it was NOT PART OF original figma file */}
        <section id="" className="py-4 md:py-8">
          <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="bg-[url('/logo Inovac Black.svg')]"> 
            </div>
              <div className="mb-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-extrabold tracking-normal md:text-4xl">
                  En Inovac sabemos que...
                </h2>
              </div>
          </div>
        </section>
        
        {/* Client Vision Section */}
        <ClientVision />
        
        {/* Nosotros Transformamos Section */}
        <NosotrosTransformamosSection />

        <ElicromSection />

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
                Agenda una cita
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
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
