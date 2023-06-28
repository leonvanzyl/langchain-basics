import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({
  streaming: true,
  callbacks: [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ],
});

await model.call("Write a song about sparkling water.");
