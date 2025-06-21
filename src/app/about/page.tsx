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
import { categories, featuredProducts, services, testimonials } from "~/./app/mocks";
import { Carousel } from "~/ui/components/carousel";
import { Carouselmp, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator } from "~/ui/primitives/carouselmp";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import ClientVision from "~/ui/components/ClientVisionSection";
import NosotrosTransformamosSection from "~/ui/components/NosotrosTransformamosSection";
import { TiltEffect } from "~/ui/components/TiltEffect";
import ElicromSection from "~/ui/components/ElicromSection";

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
            <div className="flex flex-col items-center text-left p-18">
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
                 
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden py-12 md:py-16">
  
          <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-4 grid-rows-2 gap-8 gap-y-12 items-center">
            {/* 1st — Text Block */}
            <div className="relative text-right col-start-1 col-span-2 w-auto select-none">
              <p className="text-base md:text-2xl font-semibold">En INOVAC, nos dedicamos a diseñar y construir espacios innovadores y sostenibles que mejoran la calidad de vida de nuestros clientes. A través de un enfoque centrado en la calidad, la creatividad y la personalización, nos esforzamos por superar las expectativas, mientras promovemos prácticas responsables con el medio ambiente.</p>
              
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
                  src="/cliente2Bg.jpg" // Replace with real image
                  alt="Main Architectural Shot"
                  fill
                  className="object-cover"
                />
              </div>
              </TiltEffect>
            </div>

            {/* 2nd — Text Block */}
            <div className="relative text-right col-start-1 col-span-2 w-auto select-none">
              <p className="text-base md:text-2xl font-semibold">Nuestra visión es ser reconocidos como líderes innovadores en la industria del diseño y la construcción, transformando espacios con creatividad y funcionalidad, mientras promovemos la sostenibilidad y el bienestar de nuestros clientes.</p>
              
            </div>
            {/* 2nd — Image */}
            <div className="relative col-start-3 col-span-2">
              <TiltEffect
                className=""
                rotationFactor={10}
                isReverse={false}
                enable3D={false}
                springOptions={{ damping: 20, stiffness: 300 }}>
              <div className="relative z-10 aspect-[1/1] rounded-md overflow-hidden shadow-lg">
                <Image
                  src="/cliente2Bg.jpg" // Replace with real image
                  alt="Main Architectural Shot"
                  fill
                  className="object-cover"
                />
              </div>
              </TiltEffect>
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
                Diseñamos el futuro de la construcción

                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        {/* Text: En Inovac sabemos que...  it was NOT PART OF original figma file */}
        <section id="" className="py-4 md:py-8">
          <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="bg-[url('/logo Inovac Black.svg')]"> 
            </div>
              <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-extrabold tracking-normal md:text-4xl">
                  Equipo
              </h2>
            </div>
          </div>
          {/* Tilt Effect Container with Image 1 */}
          <div className="relative grid grid-row-2 grid-cols-3 gap-2 md:grid-cols-5 items-center justify-center mx-auto max-w-7xl px-12 md:px-0">
            <h2 className="col-start-2 md:col-start-2 md:col-span-3 p-6 text-xl md:text-2xl font-semibold tracking-tight text-center">
              Contamos con profesionales en áreas como:
            </h2>
            <div className="col-start-1 row-start-2 col-span-3 md:col-start-2 md:col-span-3">
              <TiltEffect 
                rotationFactor={1} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false}
                className="w-full h-[300px] rounded-lg p-8 shadow-md bg-stone-100" 
                >
                  {/* <Image
                    src=""
                    alt="elichrom building"
                    width={1000}
                    height={1000}
                    className="object-contain"
                    loading="eager"
                  /> */}
                  <h2 className="text-sm font-semibold tracking-normal text-center mt-6 uppercase">
                    organigrama-mapa mental
                  </h2>
              </TiltEffect>
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
