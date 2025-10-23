"use client";

import { bubbleBase } from "@/lib/constants";
import { ClientMessage } from "@/lib/types";
import { useChat } from "@ai-sdk/react";
import { useActions, useUIState } from "@ai-sdk/rsc";
import { generateId } from "ai";
import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatInterface({ prompt }: { prompt: string }) {
  const { messages, sendMessage } = useChat();



  const [input, setInput] = useState<string>(prompt);
  const [conversation, setConversation] = useUIState();
  const { showProjects } = useActions();

  const listRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ block: "end" });
    } else if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length, conversation.length]);

  useEffect(() => {
    if (prompt.length > 0) {
      setInput(prompt);

      setTimeout(() => {
        handleContinueConversation(prompt);
      }, 200);
    }
  }, [prompt]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        handleContinueConversation(input);
        setInput("")
      }
    }
  }

  const handleContinueConversation = async (input: string) => {
    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      { id: generateId(), role: "user", display: input },
    ]);
    setIsLoading(true);
    const message = await showProjects(input);
    setInput("");
    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      message,
    ]);
    setIsLoading(false);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col max-w-6xl mx-auto rounded-3xl bg-transparent">
      {conversation.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl flex items-center justify-between border-2 bg-background border-border rounded-full h-[72px] px-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="What do you want to know about Zintarh?"
              className="flex-1 h-full outline-0 placeholder:text-base font-medium placeholder:text-foreground/60"
            />
            <button
              onClick={() => handleContinueConversation(input)}
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
            <div className="flex flex-col justify-end space-y-4 w-full min-h-full ">
              {conversation.map((message: ClientMessage) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? ` ${bubbleBase} ml-auto max-w-[50%] w-fit text-primary-foreground bg-background/90 rounded-br-md`
                      : ` `
                  }
                >
                  <div className="text-sm sm:text-lg"> {message.display}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>

          <div className="sticky bottom-0 p-4  backdrop-blur-sm">
            <div className="flex items-center justify-between border-2 bg-background border-border rounded-3xl h-fit py-5 px-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="What do you want to know about Zintarh?"
                className="flex-1 h-full outline-0 placeholder:text-xs sm:placeholder:text-base font-medium placeholder:text-foreground/80"
              />
              <button
                onClick={() => handleContinueConversation(input)}
                disabled={!input.trim() || isLoading}
                className="ml-2 rounded-full hover:bg-primary flex items-center justify-center border-2 border-border bg-background sm:h-10 sm:w-10 h-8 w-8 disabled:opacity-50"
              >
                <SendIcon className="" size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
