"use client";
import ChatInterface from "@/components/Native/ChatInterface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { decodeFromHex } from "@/lib/utils";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";

function AskPageContent() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value") ?? "";

  const [prompt, setprompt] = useState<string>("");

  useEffect(() => {
    if (value.length) {
      setprompt(decodeFromHex(value));
    }
  }, [value]);

  return (
    <main className="min-h-screen overflow-hidden relative">
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <FloatingNav />
      </div>
      <MobileNav />

      <div className="p-4 md:ml-24 bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-background/30 -z-10"></div>
        <div className="relative z-10 h-full max-w-6xl mx-auto">
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
