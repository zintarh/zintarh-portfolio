"use client";

import { bubbleBase } from "@/lib/constants";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatInterface({ prompt }: { prompt: string }) {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const [input, setInput] = useState<string>(prompt);
  const listRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const [hasAutoSubmitted, setHasAutoSubmitted] = useState(false);

  useEffect(() => {
    if (prompt.length > 0 && messages.length === 0 && !hasAutoSubmitted) {
      setInput(prompt);
      // Auto-submit the prompt after a short delay
      const timer = setTimeout(() => {
        sendMessage({ text: prompt });
        setInput("");
        setHasAutoSubmitted(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [prompt, messages.length, hasAutoSubmitted, sendMessage]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    } else if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === "ready") {
      sendMessage({ text: input });
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && status === "ready") {
        sendMessage({ text: input });
        setInput("");
      }
    }
  };

  const isLoading = status !== "ready";

  // Extract text content from message parts
  const getMessageContent = (message: any) => {
    if (message.parts && Array.isArray(message.parts)) {
      return message.parts
        .filter((part: any) => part.type === "text")
        .map((part: any) => part.text)
        .join("");
    }
    return message.content || "";
  };

  return (
    <div className="h-screen flex flex-col max-w-6xl mx-auto rounded-3xl bg-transparent">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl flex items-center justify-between border-2 bg-background border-border rounded-full h-[72px] px-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you want to know about Zintarh?"
              className="flex-1 h-full outline-0 placeholder:text-base font-medium placeholder:text-foreground/60"
              disabled={isLoading}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (input.trim() && status === "ready") {
                  sendMessage({ text: input });
                  setInput("");
                }
              }}
              disabled={!input.trim() || isLoading}
              className="ml-2 rounded-full hover:bg-primary flex items-center justify-center border-2 border-border bg-background h-10 w-10 disabled:opacity-50"
            >
              <SendIcon size={18} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            ref={listRef}
            className="flex-1 min-h-0 overflow-y-auto p-4 scrollbar mb-20 sm:mb-5"
          >
            <div className="flex flex-col justify-end space-y-4 w-full min-h-full">
              {messages.map((message) => {
                const content = getMessageContent(message);
                return (
                  <div
                    key={message.id}
                    className={
                      message.role === "user"
                        ? `${bubbleBase} ml-auto max-w-[50%] w-fit text-primary-foreground bg-background/90 rounded-br-md`
                        : `sm:mr-auto sm:max-w-[50%] w-full ${bubbleBase} bg-[#202020] text-foreground text-lg rounded-bl-md`
                    }
                  >
                    <div 
                      className="text-sm sm:text-lg"
                      dangerouslySetInnerHTML={{ 
                        __html: content
                      }} 
                    />
                  </div>
                );
              })}
              {isLoading && (
                <div className={`sm:mr-auto sm:max-w-[50%] w-full ${bubbleBase} bg-[#202020] text-foreground text-lg rounded-bl-md`}>
                  <div className="text-sm sm:text-lg">Thinking...</div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>

          <div className="sticky bottom-0 p-4 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex items-center justify-between border-2 bg-background border-border rounded-3xl h-fit py-5 px-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What do you want to know about Zintarh?"
                className="flex-1 h-full outline-0 placeholder:text-xs sm:placeholder:text-base font-medium placeholder:text-foreground/80"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="ml-2 rounded-full hover:bg-primary flex items-center justify-center border-2 border-border bg-background sm:h-10 sm:w-10 h-8 w-8 disabled:opacity-50"
              >
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
