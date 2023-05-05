// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Prompt is required" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Chat ID is required" });
    return;
  }
  // chatgpt query
  const response = await query(prompt, model);
  // const message: Message = {
  // 	text: response || "ChatGPT was unable to process your request.",
  // 	chatId,
  // };
  res.status(200).json({ answer: response! });
}
