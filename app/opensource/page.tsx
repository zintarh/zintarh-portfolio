"use client";
import React, { useState, useEffect } from "react";
import { ProjectCard } from "@/components/Native/ProjectCard";
import { getProjects } from "@/lib/project";
import { ProjectData } from "@/lib/types";
import { GitBranch, GitPullRequest, TrendingUp, Globe, FolderKanban, Network } from "lucide-react";
import Image from "next/image";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";

export default function OpensourcePage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [countedStats, setCountedStats] = useState({
    projects: 0,
    pullRequests: 0,
    ecosystems: 0,
  });

  const allProjects = getProjects();
  
  const opensourceProjects = allProjects.filter((p) =>
    p.title.toLowerCase().includes("opensource")
  );

  const opensourceStats = {
    totalProjects: 38,
    totalPullRequests: 116,
    totalEcosystems: 4,
    primaryEcosystem: "Starknet",
    ecosystemYears: "1+",
    notableProject: "Artpiece",
    currentRole: "OnlyDust Fellow",
    ecosystems: ["Ethereum", "Starknet", "Stellar", "Optimism"],
  };

  useEffect(() => {
    setIsVisible(true);
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCountedStats({
        projects: Math.floor(opensourceStats.totalProjects * progress),
        pullRequests: Math.floor(opensourceStats.totalPullRequests * progress),
        ecosystems: Math.floor(opensourceStats.totalEcosystems * progress),
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedStats({
          projects: opensourceStats.totalProjects,
          pullRequests: opensourceStats.totalPullRequests,
          ecosystems: opensourceStats.totalEcosystems,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statCards = [
    {
      icon: FolderKanban,
      label: "Projects",
      value: countedStats.projects,
      suffix: "+",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GitPullRequest,
      label: "Pull Requests Merged",
      value: countedStats.pullRequests,
      suffix: "",
      color: "text-foreground",
      bgColor: "bg-background/50",
    },
    {
      icon: Network,
      label: "Ecosystems",
      value: countedStats.ecosystems,
      suffix: "",
      color: "text-foreground",
      bgColor: "bg-background/50",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden relative">
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <FloatingNav />
      </div>
      <MobileNav />

      <div className="p-4 sm:p-6 lg:p-8 md:ml-24 bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-background/30 -z-10"></div>
        
        <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Hero Section */}
          <div className="mb-12 pt-8 sm:pt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-sm">
                <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Open Source
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <span className="text-foreground/50 text-sm">Building for the Community</span>
                </div>
              </div>
            </div>
            <p className="text-foreground/70 text-lg sm:text-xl max-w-3xl leading-relaxed">
              Contributing to the future of decentralized technology. Deep involvement in Starknet and Stellar ecosystems, 
              building tools and infrastructure that empower developers worldwide.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Ecosystem & Role Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Primary Ecosystems</h3>
              </div>
              <div className="space-y-3">
                {opensourceStats.ecosystems.map((ecosystem) => {
                  const ecosystemLogos: Record<string, string> = {
                    Ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
                    Starknet: "https://www.starknet.io/favicon.ico",
                    Stellar: "https://www.stellar.org/favicon.ico",
                    Optimism: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
                  };
                  
                  return (
                    <div key={ecosystem} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                      <div className="flex items-center gap-3">
                        {ecosystemLogos[ecosystem] && (
                          <div className="relative w-8 h-8 flex-shrink-0 bg-background/30 rounded-full p-1 overflow-hidden">
                            <Image
                              src={ecosystemLogos[ecosystem]}
                              alt={`${ecosystem} logo`}
                              fill
                              className="object-cover rounded-full"
                              unoptimized
                            />
                          </div>
                        )}
                        <span className="font-semibold text-foreground">{ecosystem}</span>
                      </div>
                      <span className="text-sm text-foreground/60">{opensourceStats.ecosystemYears} active</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Notable Contributions</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-background/50 border border-border/50">
                  <div className="font-semibold text-foreground mb-1">{opensourceStats.notableProject}</div>
                  <div className="text-sm text-foreground/60">Major contribution on Starknet</div>
                </div>
                <div className="p-3 rounded-xl bg-background/50 border border-border/50">
                  <div className="font-semibold text-foreground mb-1">{opensourceStats.currentRole}</div>
                  <div className="text-sm text-foreground/60">Contributing to Starknet & Stellar ecosystems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-foreground/60" />
              <h2 className="text-2xl font-bold text-foreground">Featured Open Source Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12">
              {opensourceProjects.map((project: ProjectData, index: number) => (
                <div
                  key={project.title}
                  className="transform transition-all duration-700 ease-out"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? "translateY(0) scale(1)" 
                      : "translateY(30px) scale(0.95)",
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {opensourceProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-block p-8 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-border/50 flex items-center justify-center">
                  <GitBranch className="w-8 h-8 text-foreground/40" />
                </div>
                <p className="text-foreground/60 text-lg font-medium">
                  No open source projects found.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
