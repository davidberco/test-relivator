// ClientVisionSection.tsx
import Image from "next/image";
import { TiltEffect } from "./TiltEffect";

export default function ClientVisionSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      {/* Title En Inovac sabemos... */}
      <div className="max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            En Inovac sabemos que ...
          </h2>
        </div>
      </div>

      {/* Pattern background layer */}
      <div className="absolute -z-10 left-1/4 w-[100%] h-[100%] grayscale opacity-15">
        <Image
          src="/isotypePatternBg.svg"
          alt="Pattern Background"
          height={1000}
          width={1000}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid  grid-cols-4 gap-8 items-center">
        
        {/* LEFT — Text Block */}
        <div className="relative text-right col-start-2 w-auto select-none">
          <p className="uppercase text-base md:text-3xl font-bold">cada</p>
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">
            Cli <br /> en <br /> te
          </h2>
          <p className="uppercase text-base md:text-3xl font-bold ">tiene una</p>
          <TiltEffect
            className=""
            rotationFactor={15}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 10, stiffness: 300 }}>
            <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight ">
              Visión<br />Única
            </h2>
          </TiltEffect>
        </div>

        {/* RIGHT — Staggered Images */}
        <div className="relative col-start-3 col-span-2">
          {/* Image 1 (Main large) */}
          <TiltEffect
            className=""
            rotationFactor={10}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 20, stiffness: 300 }}>
          <div className="relative z-10 aspect-[3/4] rounded-md overflow-hidden shadow-lg">
            <Image
              src="/cliente2Bg.jpg" // Replace with real image
              alt="Main Architectural Shot"
              fill
              className="object-cover"
            />
          </div>
          </TiltEffect>
          {/* Image 2 (Secondary, behind and up-right) */}
          <div className=" absolute -top-10 left-[60%] w-[160px] md:w-[180px] lg:w-[200px] aspect-square rounded-md overflow-hidden shadow-md z-10">
            <Image
              src="/clienteBg.jpg" // Replace with real image
              alt="Secondary Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
