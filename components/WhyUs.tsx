
import React from 'react';

const WhyUs: React.FC = () => {
  const points = [
    {
      id: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 21V5l12 7-12 9zM5 5v16" />
        </svg>
      ),
      title: "Design 3D",
      desc: "Modelagem volumétrica precisa para visualização absoluta de proporções e texturas antes da execução."
    },
    {
      id: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
        </svg>
      ),
      title: "Artesanal",
      desc: "Encaixes tradicionais e acabamento manual que garantem a alma de uma peça única e atemporal."
    },
    {
      id: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v18M19 3v18M5 12h14M5 7h14M5 17h14" />
        </svg>
      ),
      title: "Nobreza",
      desc: "Seleção rigorosa de lâminas naturais e madeiras maciças com certificação de origem e secagem controlada."
    },
    {
      id: "04",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Precisão",
      desc: "Engenharia de detalhamento que garante o cumprimento rigoroso de cronogramas e montagem impecável."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-amber-600"></span>
              <h2 className="text-amber-700 font-black tracking-[0.4em] uppercase text-[10px]">Excelência</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold text-stone-900 serif leading-[1.05] tracking-tight">
              Compromisso com a <br />
              <span className="italic font-normal text-amber-900/80">perfeição técnica.</span>
            </h3>
          </div>
          
          <div className="lg:max-w-sm pt-4">
            <div className="border-l-2 border-stone-100 pl-8">
              <p className="text-stone-500 text-sm leading-relaxed font-light mb-6">
                Não apenas fabricamos móveis. Criamos estruturas que definem o caráter de um ambiente através da marcenaria clássica e engenharia moderna.
              </p>
              <span className="text-[10px] font-black uppercase tracking-ultra text-stone-300">Est. 2024 • SP</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-stone-100">
          {points.map((p, i) => (
            <div key={i} className="group relative p-10 lg:p-12 transition-all hover:bg-stone-50 border-r border-stone-100 last:border-r-0">
              <div className="flex justify-between items-start mb-12">
                <div className="text-stone-400 group-hover:text-amber-700 transition-colors duration-500">
                  {p.icon}
                </div>
                <span className="text-[10px] font-black text-stone-200 group-hover:text-amber-200 transition-colors serif italic">
                  {p.id}
                </span>
              </div>
              
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-stone-900 group-hover:translate-x-1 transition-transform">
                {p.title}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                {p.desc}
              </p>
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
    </section>
  );
};

export default WhyUs;
