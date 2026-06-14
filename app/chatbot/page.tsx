'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface Msg {
  role: 'user' | 'assistant';
  text: string;
}

const greeting: Msg = {
  role: 'assistant',
  text: "Hi! I'm Farah 👋 your Shabab News assistant. Ask me anything about Lebanese universities, scholarships, careers or schools — I'm here to help you plan your next step!",
};

const suggestions = [
  'Which university is best for engineering?',
  'What scholarships can I apply for?',
  'Compare AUB and LAU tuition',
  'Best major for a high salary in Lebanon?',
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const history = messages;
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history, message: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg =
          data.error === 'GEMINI_KEY_MISSING'
            ? '⚠️ The AI assistant needs a Gemini API key. Add GEMINI_API_KEY to .env.local to enable Farah.'
            : '😅 Something went wrong reaching the assistant. Please try again.';
        setMessages((m) => [...m, { role: 'assistant', text: msg }]);
      } else {
        setMessages((m) => [...m, { role: 'assistant', text: data.text }]);
      }
    } catch {
      setMessages((m) => [...m, { role: 'assistant', text: '😅 Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-violet/15 blur-[130px]" />
      </div>

      {/* Header */}
      <div className="border-b border-line bg-bg/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4 md:px-8">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-bright to-violet text-lg font-bold text-[#02110f]">
            F
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-bg bg-green-400" />
          </div>
          <div>
            <p className="font-display font-semibold text-text">Farah</p>
            <p className="text-xs text-teal-bright">AI Assistant · Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-5 py-8 md:px-8">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-md bg-teal-bright text-[#02110f]'
                    : 'rounded-bl-md border border-line bg-surface text-text'
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-1.5 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-full bg-teal-bright"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        )}

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted transition hover:border-teal-bright hover:text-text"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 border-t border-line bg-bg/80 backdrop-blur-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4 md:px-8"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Farah anything…"
            className="flex-1 rounded-full border border-line bg-surface px-5 py-3 text-sm text-text outline-none transition focus:border-teal-bright"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white transition hover:bg-teal-deep disabled:opacity-40"
            aria-label="Send"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
}
