
import React from 'react';

const testimonials = [
  {
    quote: "Não contratamos apenas móveis, contratamos uma herança. A precisão dos encaixes e a alma que eles colocam na madeira transformaram nossa casa em uma galeria de arte viva.",
    author: "Dra. Beatriz Cavalcanti",
    role: "Proprietária em Alphaville",
    verified: true,
    initials: "BC"
  },
  {
    quote: "Como arquiteto, meu nível de exigência é microscópico. A Artesão & Co. é a única que consegue traduzir a complexidade dos meus projetos em realidade técnica impecável.",
    author: "Marcus V. Lemos",
    role: "Lemos & Associados",
    verified: true,
    initials: "ML"
  },
  {
    quote: "O que mais me impressionou não foi apenas o resultado final deslumbrante, mas o silêncio e o respeito da equipe durante a montagem. Um serviço verdadeiramente 'white-glove'.",
    author: "Helena S. Whitaker",
    role: "Empreendedora",
    verified: true,
    initials: "HW"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-40 bg-stone-100 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Large Quote Marks */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-0 left-4 text-[25rem] md:text-[40rem] font-black serif leading-none">"</div>
        <div className="absolute bottom-0 right-4 text-[25rem] md:text-[40rem] font-black serif leading-none rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-amber-800/40"></span>
            <span className="text-amber-800 font-black tracking-[0.6em] uppercase text-[10px] md:text-xs">A Voz do Cliente</span>
            <span className="w-16 h-px bg-amber-800/40"></span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 serif leading-[0.9] tracking-tighter">
            Relatos de quem <br />
            <span className="italic font-normal text-amber-900/70">vive o extraordinário.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`group relative bg-white p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-stone-200/50 transition-all duration-1000 flex flex-col justify-between min-h-[450px] md:min-h-[550px] hover:-translate-y-6 hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] ${
                i === 1 ? 'lg:-translate-y-8' : ''
              }`}
            >
              {/* Gold Accent Corner - more prominent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-[-40px] right-[-40px] w-[80px] h-[80px] bg-amber-600/10 rotate-45 group-hover:bg-amber-600 transition-colors duration-700"></div>
              </div>

              <div>
                {/* Verification & Avatar */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-full bg-stone-950 flex items-center justify-center text-white text-sm font-bold serif italic shadow-xl group-hover:bg-amber-600 transition-all duration-700 transform group-hover:scale-110">
                    {t.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-widest text-stone-900">{t.author}</span>
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1.5 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 transform transition-transform group-hover:scale-125 group-hover:rotate-12" style={{ transitionDelay: `${i * 100}ms` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl lg:text-3xl text-stone-800 serif italic leading-tight mb-12 relative">
                  <span className="text-6xl text-amber-900/10 absolute -top-10 -left-6 select-none group-hover:text-amber-600/20 transition-colors">"</span>
                  {t.quote}
                </blockquote>
              </div>

              {/* Safety Seal Placeholder */}
              <div className="pt-10 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-50 rounded-lg group-hover:bg-amber-50 transition-colors">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-600">Garantia Estrutural de 10 Anos</span>
                </div>
                <span className="hidden sm:block text-[11px] font-serif italic text-stone-300 group-hover:text-amber-900/40">#LegacyProject</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner - More impact */}
        <div className="mt-32 md:mt-48 bg-stone-950 p-10 md:p-24 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group/cta">
          {/* Subtle Wood Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] group-hover/cta:opacity-[0.06] transition-opacity"></div>
          
          {/* Animated Gradient Spot */}
          <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] group-hover/cta:bg-amber-600/20 transition-all duration-1000"></div>
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
               <span className="w-12 h-px bg-amber-600"></span>
               <h4 className="text-amber-500 font-black tracking-[0.5em] uppercase text-xs">Transforme seu Legado</h4>
             </div>
             <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white serif mb-10 italic leading-[1] tracking-tighter">
               Pronto para escrever a sua <br />
               <span className="not-italic text-stone-500 group-hover/cta:text-stone-300 transition-colors">história em madeira?</span>
             </h3>
             <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
               Junte-se a centenas de famílias que escolheram a excelência técnica da Artesão & Co. para materializar seus sonhos.
             </p>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 w-full lg:w-auto items-center">
            <a 
              href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto bg-amber-600 hover:bg-amber-500 text-white px-16 py-7 text-center text-xs font-black uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_rgba(217,119,6,0.2)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(217,119,6,0.3)] active:scale-95"
            >
              Solicitar Orçamento Gratuito
            </a>
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">Projetistas sênior online agora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
