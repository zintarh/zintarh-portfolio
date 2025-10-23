"use client";
import ChatSidebar, {
  type ConversationItem,
} from "@/components/Native/ChatSidebar";
import ChatInterface from "@/components/Native/ChatInterface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { decodeFromHex } from "@/lib/utils";

function AskPageContent() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value") ?? "";

  const [prompt, setprompt] = useState<string>("");

  useEffect(() => {
    if (value.length) {
      setprompt(decodeFromHex(value));
    }
  }, [value]);

  console.log(prompt);

  const conversations: ConversationItem[] = [
    { id: "1", title: "New chat", selected: true },
    { id: "2", title: "Project Q&A" },
  ];

  const handlechange = (prompt: string) => {
    setprompt(prompt);
  };

  return (
    <main className="flex min-h-screen h-screen overflow-hidden">
      <div className="hidden md:block">
        <ChatSidebar
          handleChange={handlechange}
          conversations={conversations}
        />
      </div>
      <div className="flex-1 p-4 bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-background/30"></div>
        <div className=" z-10">
          <ChatInterface prompt={prompt} />
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AskPageContent />
    </Suspense>
  );
}
