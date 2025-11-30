"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Code2,
  Cpu,
  Network,
  GitBranch,
  ArrowRight,
  Rocket,
  Award,
  Building2,
  GitPullRequest,
  FolderKanban,
} from "lucide-react";
import { getProjects } from "@/lib/project";

export default function Hero() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [prompt, setPrompt] = useState<string>("");
  const [countedStats, setCountedStats] = useState({
    projects: 0,
    contributions: 0,
    repositories: 0,
    companies: 0,
  });

  const projects = getProjects();
  const stats = {
    projects: projects.filter(
      (p) => !p.title.toLowerCase().includes("opensource")
    ).length,
    contributions: 60,
    repositories: 30,
    companies: 5,
  };

  useEffect(() => {
    setIsVisible(true);
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targetProjects = stats.projects;
    const targetContributions = stats.contributions;
    const targetRepositories = stats.repositories;
    const targetCompanies = stats.companies;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCountedStats({
        projects: Math.floor(targetProjects * progress),
        contributions: Math.floor(targetContributions * progress),
        repositories: Math.floor(targetRepositories * progress),
        companies: Math.floor(targetCompanies * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedStats({
          projects: targetProjects,
          contributions: targetContributions,
          repositories: targetRepositories,
          companies: targetCompanies,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const expertiseAreas = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "Building intuitive, human-centered experiences",
      tech: ["React", "Next.js", "TypeScript"],
      color: "text-primary",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Network,
      title: "Web3 & Smart Contracts",
      description: "Decentralized solutions on Starknet & Ethereum",
      tech: ["Cairo", "Solidity", "Rust"],
      color: "text-foreground",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Cpu,
      title: "AI Development",
      description: "End-to-end AI applications that feel natural",
      tech: ["Vercel AI SDK", "OpenAI", "LangChain"],
      color: "text-foreground",
      gradient: "from-orange-500/10 to-yellow-500/10",
    },
  ];

  const achievements = [
    { icon: Award, text: "Ethereum World Fair Volunteer - Devcon Argentina" },
    { icon: Building2, text: "OnlyDust Fellow - Starknet & Stellar" },
    { icon: GitBranch, text: "60+ Open Source Contributions" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-full flex flex-col justify-center overflow-y-auto">
      <div
        className={`mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-border backdrop-blur-sm w-fit">
              <Rocket className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-medium text-foreground/70">
                Available for Opportunities
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary font-[var(--font-gloria)] relative inline-block">
                  Zintarh
                  <div className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-primary/20 rounded-full blur-sm"></div>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-4">
                Senior Frontend & AI Engineer
              </p>

              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
                I build intuitive, human-centered frontend experiences for AI
                and Web3 applications. Making complex technology feel simple and
                accessible.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => router.push("/projects")}
                className="group relative px-6 py-3 rounded-xl bg-background border-2 border-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 font-semibold text-sm">
                  View My Work
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button
                onClick={() => router.push("/ask")}
                className="px-6 py-3 rounded-xl bg-primary/10 border-2 border-primary hover:bg-primary/20 transition-all duration-300 font-semibold text-sm"
              >
                Chat with Me
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(30px)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground/80 flex-1">
                      {achievement.text}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`mb-6 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">
            Open Source Contributions
          </h2>
          <div className="h-px flex-1 bg-border/50 ml-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: FolderKanban,
              value: countedStats.projects,
              label: "Projects",
              color: "text-primary",
              bg: "bg-primary/10",
            },
            {
              icon: GitBranch,
              value: countedStats.contributions,
              label: "Contributions",
              color: "text-foreground",
              bg: "bg-background/50",
            },
            {
              icon: Code2,
              value: countedStats.repositories,
              label: "Repositories",
              color: "text-foreground",
              bg: "bg-background/50",
            },
            {
              icon: Building2,
              value: countedStats.companies,
              label: "Companies",
              color: "text-foreground",
              bg: "bg-background/50",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div
                  className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                  {stat.label !== "Companies" ? "+" : ""}
                </div>
                <div className="text-xs text-foreground/60 font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            What I{" "}
            <span className="font-[var(--font-gloria)] text-primary">Do</span>
          </h2>
          <div className="h-px flex-1 bg-border/50 ml-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group relative p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${area.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 text-xs mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-background/50 border border-border/50 text-xs font-semibold text-foreground/80 hover:bg-background hover:border-border transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
