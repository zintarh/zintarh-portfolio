"use client";
import { ProjectData } from "@/lib/types";
import React from "react";
import { Link } from "lucide-react";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectData> = ({
  title,
  description,
  techStack,
  liveDemoUrl,
  githubUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden my-4 animate-fadeIn">
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
      
      <div className="p-4">
        <h3 className="font-mono font-bold text-lg text-foreground mb-2">
          {title}
        </h3>
        <p className="text-foreground/80 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-border text-secondary text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent flex items-center gap-x-1 hover:text-accent-hover font-semibold text-sm"
            >
              Live Demo{" "}
              <span>
                <Link className="h-3 w-4" />
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary font-semibold text-sm"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
