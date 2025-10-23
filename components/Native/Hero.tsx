import { suggestions } from "@/lib/constants";
import React, { useState } from "react";
import TextType from "../TextType";
import { SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { encodeToHex } from "@/lib/utils";

export default function Hero() {
  const [prompt, setPrompt] = useState<string>("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handlePromptChange = (prompt: string) => {
    router.push(`/ask?value=${encodeToHex(prompt)}`);
  };

  return (
    <div className=" max-w-4xl mx-auto">
      <div className="mb-10">
        <TextType
          text="Hello! I’m an AI Assistant "
          className="text-5xl font-semibold mb-4 text-black "
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          onSentenceComplete={(sentence: string, index: number) => {
            console.log("Intro complete", sentence, index);
          }}
        />
      </div>
      <div className="w-full ">
        <div className=" flex flex-col justify-between border-2 bg-background border-border rounded-3xl h-[180px] px-4 mb-5">
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Ask me anything about Zintarh"
            className="h-[60px] w-full text-2xl outline-0 placeholder:text-xl font-medium placeholder:text-primary"
          />
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-x-4 ">
              <div className=" rounded-full bg-background border w-fit text-foreground px-2 py-1 text-sm ">
                <p>Senior Frontend Engineer</p>
              </div>
              <div className=" rounded-full bg-background border w-fit text-foreground px-2 py-1 text-sm ">
                <p>Web3 Engineer</p>
              </div>
              <div className=" rounded-full bg-background border w-fit text-foreground px-2 py-1 text-sm ">
                <p>AI Engineer</p>
              </div>
            </div>

            <button
              disabled={!prompt.trim()}
              onClick={() => handlePromptChange(prompt)}
              className="rounded-full hover:bg-primary flex items-center justify-center border-2 border-border bg-background h-12 w-12"
            >
              <SendIcon className="" />
            </button>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="mb-3 font-bold text-sm text-foreground/80">
            Quick Actions
          </p>
          <div className="flex items-center gap-x-6 flex-wrap gap-y-4">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handlePromptChange(suggestion)}
                className=" border-1 font-semibold px-3 py-3 rounded-xl text-base w-fit text-center border-primary hover:border-black  hover:bg-black"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
