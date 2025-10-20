"use client";
import ChatSidebar, {
  type ConversationItem,
} from "@/components/Native/ChatSidebar";
import ChatInterface from "@/components/Native/ChatInterface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "@/components/Native/ProjectCard";
import { getProjects } from "@/lib/project";
import Contact from "@/components/Native/Contact";

export default function page() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt")
    ? decodeURIComponent(searchParams.get("prompt")!).replace(/-/g, " ")
    : "";

  const [formattedPrompt, setFormattedPrompt] = useState<string>("");

  useEffect(() => {
    if (prompt.length) {
      setFormattedPrompt(prompt);
    }
  }, [prompt]);

  const conversations: ConversationItem[] = [
    { id: "1", title: "New chat", selected: true },
    { id: "2", title: "Project Q&A" },
  ];

  const handlechange = (prompt: string) => {
    setFormattedPrompt(prompt);
  };



  return (
    <main className="flex min-h-screen h-screen overflow-hidden">
      <div className="hidden md:block">
        <ChatSidebar
          handleChange={handlechange}
          conversations={conversations}
        />
      </div>
      <div className="flex-1 p-4">
        <ChatInterface prompt={formattedPrompt} />
      </div>
    </main>
  );
}
