"use client";
import LightRays from "@/components/LightRays";
import Hero from "@/components/Native/Hero";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Zintarh",
      "jobTitle": "Senior Frontend Engineer",
      "description": "Best frontend engineer in Nigeria and Africa specializing in Web3, AI development, and smart contracts. Women in blockchain and web3. Best portfolio showcasing innovative projects.",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://zintarh.dev",
      "sameAs": [
        "https://www.linkedin.com/in/zintarh-dev",
        "https://x.com/zintarh_dev",
        "https://t.me/zintarh"
      ],
      "knowsAbout": [
        "Frontend Development",
        "Web3 Development",
        "AI Development",
        "React",
        "Next.js",
        "TypeScript",
        "Starknet",
        "Ethereum",
        "Smart Contracts",
        "Cairo",
        "Solidity"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG",
        "addressRegion": "Nigeria"
      },
      "alumniOf": {
        "@type": "Organization",
        "name": "BlockHeaderWeb3"
      },
      "worksFor": [
        {
          "@type": "Organization",
          "name": "HorusLabs"
        },
        {
          "@type": "Organization",
          "name": "OnlyDust"
        },
        {
          "@type": "Organization",
          "name": "Zero and Ones"
        }
      ],
      "award": [
        "1st Runner Up - MUA Accra Hackathon 2024",
        "OnlyDust Fellow - Starknet & Stellar",
        "Ethereum World Fair Volunteer - Devcon Argentina"
      ],
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Frontend Development",
          "description": "Professional frontend engineering services specializing in Web3 and AI applications"
        },
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
