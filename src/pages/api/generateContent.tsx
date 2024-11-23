// src/pages/api/generateContent.ts
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string, // Ensure your API key is stored correctly in the .env.local file
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use the newer model
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000, // Adjust based on how much content you expect
      temperature: 0.7, // Adjust for creativity
    });

    res.status(200).json({ text: response.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: 'Error generating content' });
  }
}
