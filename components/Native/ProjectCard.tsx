"use client";
import { ProjectData } from "@/lib/types";
import React from "react";
import { Link, Github } from "lucide-react";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectData> = ({
  title,
  description,
  techStack,
  liveDemoUrl,
  githubUrl,
  imageUrl,
  category,
}) => {
  return (
    <div className="h-full flex flex-col bg-background border border-border rounded-xl shadow-lg overflow-hidden animate-fadeIn hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      {/* {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            className="object-cover"
           
          />
        </div>
      )} */}
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          {category && (
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 bg-border/50 text-foreground/70">
              {category.toUpperCase()}
            </span>
          )}
        </div>
        
        <h3 className="font-mono font-bold text-lg text-foreground mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-foreground/80 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-border text-secondary text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="bg-border/50 text-foreground/50 text-xs font-semibold px-2.5 py-1 rounded-full">
              +{techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-border/50">
          {liveDemoUrl && liveDemoUrl !== "#" && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent flex items-center gap-x-1 hover:text-accent-hover font-semibold text-sm transition-colors"
            >
              Live Demo{" "}
              <Link className="h-3 w-4" />
            </a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
