"use client";
import LightRays from "@/components/LightRays";
import Hero from "@/components/Native/Hero";

export default function Home() {
  return (
    <div className="relative bg-background h-screen items-center  justify-center flex flex-col">
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

      <div className="absolute w-full">
        <Hero />
      </div>

      
    </div>
  );
}
