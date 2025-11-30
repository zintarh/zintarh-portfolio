import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { AssistantPrompt } from "@/lib/ai/prompt";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system: AssistantPrompt,
    messages: messages.map((msg: any) => ({
      role: msg.role,
      content: msg.parts?.find((p: any) => p.type === "text")?.text || msg.content || "",
    })),
  });

  return result.toTextStreamResponse();
}
