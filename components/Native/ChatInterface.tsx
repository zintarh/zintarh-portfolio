"use client";

import { bubbleBase } from "@/lib/constants";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { SendIcon, MessageSquare } from "lucide-react";
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
  interface MessagePart {
    type: string;
    text?: string;
  }

  interface MessageWithParts {
    parts?: MessagePart[];
    content?: string;
  }

  const getMessageContent = (message: MessageWithParts) => {
    if (message.parts && Array.isArray(message.parts)) {
      return message.parts
        .filter((part: MessagePart) => part.type === "text")
        .map((part: MessagePart) => part.text || "")
        .join("");
    }
    return message.content || "";
  };

  const suggestions = [
    "Tell me about your experience",
    "What projects have you worked on?",
    "What's your tech stack?",
    "How can I contact you?",
  ];

  return (
    <div className="h-screen flex flex-col max-w-6xl mx-auto rounded-3xl bg-transparent">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-3xl">
            {/* Microsoft Copilot-style centered input */}
            <div className="relative mb-8">
              <div className="relative flex items-center">
                <div className="absolute left-4 z-10">
                  <MessageSquare className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about Zintarh..."
                  className="w-full h-14 pl-14 pr-14 bg-background/80 backdrop-blur-sm border-2 border-border rounded-2xl outline-none focus:border-primary transition-colors placeholder:text-foreground/50 text-foreground text-base font-medium shadow-lg"
                  disabled={isLoading}
                  autoFocus
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
                  className="absolute right-2 h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-background/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md disabled:shadow-none"
                  aria-label="Send message"
                >
                  <SendIcon size={18} className="text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(suggestion);
                    if (status === "ready") {
                      sendMessage({ text: suggestion });
                      setInput("");
                    }
                  }}
                  className="px-4 py-2 rounded-full bg-background/50 border border-border/50 hover:border-border hover:bg-background/70 text-sm text-foreground/70 hover:text-foreground transition-all"
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
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
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <div className="absolute left-4 z-10">
                <MessageSquare className="w-5 h-5 text-foreground/40" />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about Zintarh..."
                className="w-full h-14 pl-14 pr-14 bg-background/80 backdrop-blur-sm border-2 border-border rounded-2xl outline-none focus:border-primary transition-colors placeholder:text-foreground/50 text-foreground text-base font-medium shadow-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-background/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md disabled:shadow-none"
                aria-label="Send message"
              >
                <SendIcon size={18} className="text-primary-foreground" />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
