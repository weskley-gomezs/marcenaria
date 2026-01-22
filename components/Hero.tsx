
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2069&auto=format&fit=crop"
          alt="Móvel planejado de luxo"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="max-w-4xl text-white">
          <span className="inline-block text-amber-500 font-bold uppercase tracking-ultra text-[10px] sm:text-xs mb-6 animate-fade-in">
            Estética • Funcionalidade • Tradição
          </span>
          <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-black mb-8 leading-[0.9] tracking-tighter serif italic">
            Móveis <span className="not-italic font-normal text-stone-200">sob</span> medida.
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-stone-300 font-light leading-relaxed max-w-xl">
            Projeto, fabricação e instalação com acabamento <span className="text-white font-medium italic">premium</span>. Transforme seu espaço em um legado.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all text-center shadow-2xl hover:-translate-y-1"
            >
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="group flex items-center justify-center gap-3 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all">
              <span className="border-b border-white/30 group-hover:border-white">Ver Portfólio</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-amber-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
