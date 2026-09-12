// import { askClaude } from "./llm/anthropic-client.js";
// import { DOCUMENTATION_ASSISTANT_PROMPT } from "./llm/prompts.js";
// import { streamClaude } from "./llm/stream.js";

import { startCLI } from "./chat/cli.js";

// const QUESTION = `Que es async/await en js, de forma resumida`;

// async function main(): Promise<void> {
//   console.log("╔════════════════════════════════════════╗");
//   console.log("║        DevAssistant - Curso IA         ║");
//   console.log("║        Streaming                   ║");
//   console.log("╚════════════════════════════════════════╝");
//   console.log("");
//   console.log("Sin streaming");
//   console.log("");
//   const answere = await askClaude(QUESTION, DOCUMENTATION_ASSISTANT_PROMPT)
//   console.log("-".repeat(50));
//   console.log(answere);
//   await new Promise((resolve) => setTimeout(resolve, 1500))
  
//   console.log("-".repeat(50));
//   console.log("-");
//   console.log("con streaming");
//   console.log("");
//   await streamClaude(QUESTION, DOCUMENTATION_ASSISTANT_PROMPT)

// }

// main().catch((error: Error) => console.error("Error", error.message));

startCLI().catch((error: Error) => {
  console.error("Error", error.message)
  process.exit(1)
});