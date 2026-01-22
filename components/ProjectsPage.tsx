
import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

const allProjects: Project[] = [
  { 
    id: 1, 
    title: 'Cozinha Nogueira Pura', 
    category: 'Cozinhas', 
    description: 'Integração total com ilha central e marcenaria oculta.', 
    year: '2024', 
    image: 'https://storage.panoverse-cdn.com.br/img.panorama/produto/112278/cozinha-completa-proenca-7-portas-6-gavetas-nogueira-nude-prime-tx-dp2706-demobile-1099235-1000x1000-cover.jpg' 
  },
  { 
    id: 2, 
    title: 'Suíte Master Minimalista', 
    category: 'Dormitórios', 
    description: 'Painéis ripados em carvalho americano e iluminação embutida.', 
    year: '2023', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4utIs-ZyiGumnoahVGw71vLIzPkamk026tA&s' 
  },
  { id: 3, title: 'Escritório Executivo', category: 'Corporativo', description: 'Mesa escultural em madeira maciça com detalhes em couro.', year: '2024', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, title: 'Espaço Gourmet Externo', category: 'Gourmet', description: 'Marcenaria naval resistente para áreas externas de alto padrão.', year: '2023', image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Biblioteca Particular', category: 'Dormitórios', description: 'Estantes do piso ao teto com escada deslizante em latão.', year: '2024', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRic-XAlK2As5MNWgXcpml033PhgNRUZBI5aw&s' },
  { id: 6, title: 'Recepção Dental Clinic', category: 'Corporativo', description: 'Curvas orgânicas e acabamento em laca acetinada.', year: '2023', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop' },
  { id: 7, title: 'Closet Walk-in Oak', category: 'Dormitórios', description: 'Organização inteligente com divisores em camurça.', year: '2024', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2074&auto=format&fit=crop' },
  { id: 8, title: 'Living Social Integrado', category: 'Gourmet', description: 'Painel de TV com sistema de som invisível e rack suspenso.', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop' },
];

const categories = ['Todos', 'Cozinhas', 'Dormitórios', 'Corporativo', 'Gourmet'];

const ProjectsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === 'Todos' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="mb-20">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-12 text-sm font-bold uppercase tracking-widest group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Início
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-7xl md:text-9xl font-bold text-stone-900 serif leading-[0.8] mb-8 tracking-tighter">
                Obras <br />
                <span className="italic font-normal text-amber-900/40">Autorais.</span>
              </h1>
              <p className="text-xl text-stone-500 font-light leading-relaxed">
                Explore nossa curadoria de projetos onde a técnica encontra a arte. Cada peça é fabricada com precisão matemática e paixão artesanal.
              </p>
            </div>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === cat 
                      ? 'bg-stone-900 text-white shadow-xl' 
                      : 'bg-white text-stone-400 border border-stone-200 hover:border-stone-900 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={`group ${idx % 2 !== 0 ? 'md:translate-y-20' : ''}`}>
              <div className="relative overflow-hidden aspect-[16/10] bg-stone-200 mb-8 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <span className="text-amber-700 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-stone-900 serif mb-4 group-hover:text-amber-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-64 text-center border-t border-stone-200 pt-24">
          <h4 className="text-4xl font-bold text-stone-900 serif mb-8 italic">Inspirado por estas obras?</h4>
          <p className="text-stone-500 mb-12 max-w-xl mx-auto">
            Seu espaço merece a mesma atenção aos detalhes. Vamos conversar sobre como transformar seu ambiente hoje mesmo.
          </p>
          <a 
            href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:-translate-y-1 transition-all"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
