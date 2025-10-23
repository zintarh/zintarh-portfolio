"use server";
import { createAI, getMutableAIState, streamUI } from "@ai-sdk/rsc";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { ProjectCard } from "@/components/Native/ProjectCard";
import { getProjects } from "@/lib/project";
import { ServerMessage } from "@/lib/types";
import { generateId } from "ai";
import { AssistantPrompt } from "@/lib/ai/prompt";
import Contact from "@/components/Native/Contact";
import { bubbleBase } from "@/lib/constants";

export type AIState = Array<{
  role: "user" | "assistant" | "system" | "function";
  content: string;
  name?: string;
}>;
export type UIState = Array<{ id: number; display: React.ReactNode }>;

async function showProjects(userInput: string) {
  "use server";

  const history = getMutableAIState();

  const result = await streamUI({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "system",
        content: AssistantPrompt,
      },
      ...history.get(),
      { role: "user", content: userInput },
    ],
    tools: {
      projects: {
        description:
          "Use this tool when the user asks to see projects or works. The user might use phrases like 'show projects', 'show your works', 'Zintarh's works', or 'her works'. This tool can filter by category: 'Web3' or 'AI'",
        inputSchema: z.object({
          category: z.enum(["web3", "ai"]),
        }),
        generate: async function* ({ category }) {
          yield (
            <p>Loading some {category.toUpperCase()} projects for you...</p>
          );
          const projects = getProjects().filter((p) =>
            p.category?.toLowerCase().includes(category)
          );

          return (
            <div className={`space-y-3 `}>
              <div className="grid gap-3 ">
                {projects.map((p) => (
                  <ProjectCard {...p} key={p.title} />
                ))}
              </div>
            </div>
          );
        },
      },

      contact: {
        description: "Contact information or how do I contact her ",
        inputSchema: z.object(),
        generate: async function* () {
          yield <p>Loading...</p>;

          return <Contact />;
        },
      },
    },
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          { role: "assistant", content },
        ]);
      }
      return (
        <div
          className={`sm:mr-auto sm:max-w-[50%] w-full ${bubbleBase} bg-[#202020] text-foreground text-lg rounded-bl-md`}
        >
          {content}
        </div>
      );
    },
  });

  return {
    id: generateId(),
    role: "assistant",
    result: result,
    display: result.value,
  };
}

export const AI = createAI<AIState, UIState>({
  actions: { showProjects },
  initialUIState: [],
  initialAIState: [],
});
