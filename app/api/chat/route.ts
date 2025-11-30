import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages } from "ai";
import { AssistantPrompt } from "@/lib/ai/prompt";
import { UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system: AssistantPrompt,
    messages: convertToModelMessages(messages),
  });

  return result.toTextStreamResponse();
}
