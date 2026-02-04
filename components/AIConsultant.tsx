
import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'سلام! من دستیار هوشمند بارمان هستم. چطور می‌توانم در انتخاب مصالح به شما کمک کنم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askGemini(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'خطایی رخ داد.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[2000] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 h-96 glass-card shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-emerald-500/20">
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center shrink-0">
            <span className="font-bold flex items-center gap-2">
              <i className='bx bxs-bot'></i> مشاور هوشمند بارمان
            </span>
            <button onClick={() => setIsOpen(false)}><i className='bx bx-x text-2xl'></i></button>
          </div>
          <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-emerald-100 text-emerald-900 rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-slate-400 animate-pulse">در حال بررسی...</div>}
          </div>
          <div className="p-3 border-t bg-white flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="سوال خود را بپرسید..."
              className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button 
              onClick={handleSend}
              className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700"
            >
              <i className='bx bxs-send transform rotate-180'></i>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform active:scale-95"
      >
        <i className={`bx ${isOpen ? 'bx-chevron-down' : 'bxs-message-rounded-dots animate-bounce'}`}></i>
      </button>
    </div>
  );
};

export default AIConsultant;
