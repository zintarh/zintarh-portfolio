"use client";
import React, { useState, useEffect, useMemo } from "react";
import { ProjectCard } from "@/components/Native/ProjectCard";
import { getProjects } from "@/lib/project";
import { ProjectData } from "@/lib/types";
import { Code2, Brain, Filter, Search, Grid3x3, List } from "lucide-react";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web3" | "ai">("all");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allProjects = getProjects();
  
  const projects = allProjects.filter(
    (p) => !p.title.toLowerCase().includes("opensource")
  );

  const filteredProjects = useMemo(() => {
    let filtered = selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category?.toLowerCase() === selectedCategory);

    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [projects, selectedCategory, searchQuery]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categoryStats = {
    all: projects.length,
    web3: projects.filter((p) => p.category?.toLowerCase() === "web3").length,
    ai: projects.filter((p) => p.category?.toLowerCase() === "ai").length,
  };

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
          {/* Simplified Hero */}
          <div className="mb-12 pt-8 sm:pt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  My Work
                </h1>
                <p className="text-foreground/60 text-sm mt-2">
                  {categoryStats.all} projects • {selectedCategory === "all" ? "All Categories" : selectedCategory.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Compact Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-border backdrop-blur-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg border transition-all ${
                    viewMode === "grid"
                      ? "bg-background border-border"
                      : "bg-background/50 border-border/50 hover:bg-background/70"
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg border transition-all ${
                    viewMode === "list"
                      ? "bg-background border-border"
                      : "bg-background/50 border-border/50 hover:bg-background/70"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {(["all", "web3", "ai"] as const).map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-xl border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-background border-border text-foreground"
                        : "bg-background/50 border-border/50 text-foreground/70 hover:border-border hover:text-foreground"
                    }`}
                  >
                    <span className="font-semibold text-sm capitalize">
                      {category === "all" ? "All" : category.toUpperCase()}
                    </span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                      isActive 
                        ? "bg-primary/20 text-primary" 
                        : "bg-border/50 text-foreground/50"
                    }`}>
                      {categoryStats[category]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="mb-6 text-sm text-foreground/60">
              Found <span className="font-semibold text-foreground">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? "s" : ""}
            </div>
          )}

          {/* Projects Grid */}
          <div className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" 
              : "flex flex-col gap-6"
          } pb-12`}>
            {filteredProjects.map((project: ProjectData, index: number) => {
              const delay = index * 50;
              return (
                <div
                  key={project.title}
                  className="group transform transition-all duration-500 ease-out"
                  style={{
                    animationDelay: `${delay}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? "translateY(0) scale(1)" 
                      : "translateY(20px) scale(0.98)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    relative h-full transition-all duration-300
                    ${hoveredIndex === index ? "scale-[1.02] -translate-y-2" : ""}
                  `}>
                    <ProjectCard {...project} />
                    {hoveredIndex === index && (
                      <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl -z-10 opacity-50 transition-opacity duration-300"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-block p-8 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-border/50 flex items-center justify-center">
                  <Search className="w-8 h-8 text-foreground/40" />
                </div>
                <p className="text-foreground/60 text-lg font-medium mb-2">
                  No projects found
                </p>
                <p className="text-foreground/40 text-sm">
                  Try adjusting your search or filter
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
