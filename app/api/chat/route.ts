import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT } from '@/lib/systemPrompt';

export const runtime = 'nodejs';

const API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export async function POST(req: Request) {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    return NextResponse.json({ error: 'GEMINI_KEY_MISSING' }, { status: 503 });
  }

  try {
    const { history, message } = (await req.json()) as { history: ChatMessage[]; message: string };

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: { maxOutputTokens: 512, temperature: 0.7, topP: 0.9 },
    });

    // Drop a leading assistant greeting; Gemini history must start with a user turn.
    const geminiHistory = (history || [])
      .filter((m, i) => !(m.role === 'assistant' && i === 0))
      .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.text }] }));

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(message);
    return NextResponse.json({ text: result.response.text() });
  } catch (e) {
    console.error('Gemini chat error:', e);
    return NextResponse.json({ error: 'CHAT_FAILED' }, { status: 500 });
  }
}
