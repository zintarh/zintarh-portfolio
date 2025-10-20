import { ReactNode } from "react";

export type ChatMessage = {
    id: string;
    role: "user" | "assistant";
    content: string;
  };
  

  export interface ProjectData {
    title: string;
    description: string;
    techStack: string[];
    liveDemoUrl?: string;
    category: string;
    githubUrl?: string;
    imageUrl?: string; // Add this line
  }


  export interface ServerMessage {
    role: 'user' | 'assistant';
    content: string;
  }
  
  export interface ClientMessage {
    id: string;
    role: 'user' | 'assistant';
    display: ReactNode;
  }