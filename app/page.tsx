"use client";
import LightRays from "@/components/LightRays";
import Hero from "@/components/Native/Hero";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen overflow-y-auto h-screen">
      <div className="fixed top-6 left-6 z-50 hidden md:block">
        <FloatingNav />
      </div>
      <MobileNav />
      
      <div className="relative bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat h-full ">
        <div className="absolute inset-0 bg-background/30"></div>
        
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

<div className="absolute inset-0 z-10 w-full overflow-y-auto">
          <Hero />
        </div>

       
      </div>


      
    </div>
  );
}
