"use client";
import ChatSidebar, {
  type ConversationItem,
} from "@/components/Native/ChatSidebar";
import ChatInterface from "@/components/Native/ChatInterface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { decodeFromHex } from "@/lib/utils";
import { Menu, X } from "lucide-react";

function AskPageContent() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value") ?? "";

  const [prompt, setprompt] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (value.length) {
      setprompt(decodeFromHex(value));
    }
  }, [value]);


  const conversations: ConversationItem[] = [
    { id: "1", title: "New chat", selected: true },
    { id: "2", title: "Project Q&A" },
  ];

  const handlechange = (prompt: string) => {

    setprompt(prompt);
    setIsSidebarOpen(false); // Close sidebar on mobile when suggestion is clicked
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };




  return (
    <main className="flex min-h-screen h-screen overflow-hidden relative">
      <div className="hidden md:block">
        <ChatSidebar
          handleChange={handlechange}
          conversations={conversations}
        />
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-[280px] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <ChatSidebar
          handleChange={handlechange}
          conversations={conversations}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="md:hidden flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-background/50 transition-colors"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-semibold">Zintarh&apos;s Portfolio</h1>
          <div className="w-10" /> 
        </div>

        <div className="flex-1 p-4 bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-background/30 -z-10"></div>
          <div className="relative z-10 h-full">
            <ChatInterface prompt={prompt} />
          </div>
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
