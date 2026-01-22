
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', title: 'Consultoria Inicial', desc: 'Entendemos seu espaço, estilo e necessidades funcionais.' },
    { number: '02', title: 'Projeto e Orçamento', desc: 'Apresentamos o projeto 3D e o investimento detalhado.' },
    { number: '03', title: 'Produção Artesanal', desc: 'Fabricação em nossa oficina com maquinário de ponta.' },
    { number: '04', title: 'Instalação Limpa', desc: 'Montagem profissional com o mínimo de transtorno em sua casa.' }
  ];

  return (
    <section id="processos" className="py-24 bg-stone-900 text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-800/10 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Transparência</h2>
            <h3 className="text-4xl font-bold serif mb-6">Como damos vida ao seu móvel</h3>
            <p className="text-stone-400 leading-relaxed mb-8">
              Um processo estruturado para garantir que o resultado final supere suas expectativas. Do primeiro contato à entrega das chaves.
            </p>
            <a href="#contato" className="inline-block border-2 border-amber-600 text-amber-500 px-8 py-3 rounded-full font-bold hover:bg-amber-600 hover:text-white transition-all">
              Agendar Visita Técnica
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-stone-800/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
                <span className="text-5xl font-black text-amber-600/20 mb-4 block serif">{s.number}</span>
                <h4 className="text-xl font-bold mb-3 serif">{s.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
