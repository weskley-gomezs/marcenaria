
import React from 'react';

const services = [
  {
    num: '01',
    title: 'Cozinhas Planejadas',
    description: 'Design inteligente e ergonômico com os melhores acabamentos do mercado. Projetos inspirados na funcionalidade moderna.',
    image: 'https://blog.madesa.com/wp-content/uploads/2025/05/image4-1024x819.jpg', 
    size: 'tall'
  },
  {
    num: '02',
    title: 'Móveis Corporativos',
    description: 'Soluções sob medida para escritórios que buscam sofisticação, autoridade e funcionalidade extrema.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    size: 'short'
  },
  {
    num: '03',
    title: 'Restauração Ética',
    description: 'Devolvemos o brilho e a estrutura original de peças históricas com técnicas tradicionais de marcenaria fina.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75ZS76cpd0S7AtRJdqEoAxetpLBpAgDA3DA&s', 
    size: 'short'
  },
  {
    num: '04',
    title: 'Escadas & Revestimentos',
    description: 'Acabamentos em madeira maciça que valorizam a arquitetura. Escadas que são verdadeiras esculturas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_tJr87ioQ_kB5h3GCQF6hqpGBj8ILAyOsg&s', 
    size: 'tall'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-stone-950 text-white relative overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute top-1/4 -left-20 text-[20rem] font-black serif text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        HANDCRAFTED
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-amber-600"></span>
              <span className="text-amber-500 font-black tracking-[0.6em] uppercase text-[10px]">Nossos Serviços</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold serif leading-[0.9] tracking-tighter">
              A matéria prima <br />
              <span className="italic font-normal text-stone-500">elevada ao topo.</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-stone-400 text-sm leading-relaxed font-light border-l border-amber-900/50 pl-6 py-2">
              Diferente de tudo o que você já viu. Unimos a tradição da madeira maciça com a tecnologia de ponta em projetos autorais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col transition-all duration-1000 ${
                service.size === 'tall' ? 'lg:-translate-y-12' : 'lg:translate-y-12'
              }`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[3/4] mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-40"></div>
                
                {/* Label Vertical */}
                <div className="absolute top-0 right-0 h-full w-12 flex items-center justify-center border-l border-white/5 bg-stone-950/20 backdrop-blur-sm transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                  <span className="rotate-90 whitespace-nowrap text-[10px] font-black tracking-widest uppercase text-amber-500">
                    Premium Woodwork
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <span className="text-amber-900 font-black text-6xl serif italic absolute -top-12 -left-4 opacity-20 group-hover:opacity-40 transition-opacity select-none">
                  {service.num}
                </span>
                <h4 className="text-2xl font-bold mb-4 serif group-hover:text-amber-500 transition-colors duration-500 relative">
                  {service.title}
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed font-light group-hover:text-stone-300 transition-colors duration-500 mb-6">
                  {service.description}
                </p>
                
                <div className="h-px w-0 bg-amber-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-40 flex items-center gap-8 opacity-20 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-black tracking-widest uppercase text-stone-500">Qualidade Certificada</span>
          <div className="flex-1 h-px bg-gradient-to-r from-stone-800 via-amber-900 to-transparent"></div>
          <span className="text-[10px] font-black tracking-widest uppercase text-stone-500">Artesão & Co.</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
