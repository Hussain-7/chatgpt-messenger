import { Configuration, OpenAIApi } from "openai";
// const query = async (prompt, chatId, model) => {};

const config = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const openAI = new OpenAIApi(config);

export default openAI;
