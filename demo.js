import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

const template =
  "What would be a good company name for a company that makes {product}?";
const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const model = new OpenAI({
  temperature: 0.9,
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

const res = await chain.call({
  product: "colorful socks",
});

console.log(res);
