
import React, { useState, useRef, useEffect } from 'react';
import { getWoodworkAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Saudações. Sou o mestre consultor da Artesão & Co. Em que posso auxiliá-lo tecnicamente hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getWoodworkAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="consultor" className="py-32 bg-stone-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-amber-500 font-black tracking-ultra uppercase text-[10px] mb-6">Tecnologia Aplicada</h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-10 serif leading-tight italic">Especialista <span className="not-italic text-stone-400">Digital</span></h3>
          <p className="text-stone-400 text-lg mb-12 font-light leading-relaxed">
            Nossa IA foi treinada com décadas de conhecimento em marcenaria de luxo para guiar suas escolhas de design e materiais.
          </p>
          <div className="space-y-6">
            {[
              "Análise de durabilidade de madeiras nobres.",
              "Dicas de manutenção para vernizes e ceras.",
              "Compatibilidade de estilos contemporâneos."
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <span className="w-8 h-px bg-amber-800 transition-all group-hover:w-12 group-hover:bg-amber-500"></span>
                <span className="text-sm font-light text-stone-300 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-sm shadow-2xl flex flex-col h-[650px] overflow-hidden">
          <div className="bg-stone-100 p-6 flex items-center justify-between border-b border-stone-200">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center font-bold text-white text-[10px] serif italic shadow-inner">M</div>
              <p className="font-black text-[10px] uppercase tracking-widest text-stone-900">Mestre IA v2.0</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Ativo</span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-900 text-white font-light' 
                    : 'bg-stone-50 border-l-2 border-amber-600 text-stone-800 font-normal'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce [animation-delay:-.3s]"></span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce [animation-delay:-.5s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-stone-100">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Consulte sobre madeiras ou estilos..."
                className="flex-1 bg-stone-50 border border-stone-200 rounded-sm px-5 py-4 text-stone-900 text-[13px] font-light focus:border-stone-900 transition-all outline-none italic"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-stone-900 hover:bg-black text-white px-6 rounded-sm transition-all disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
