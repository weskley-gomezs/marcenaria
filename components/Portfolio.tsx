
import React, { useState } from 'react';

interface PortfolioProps {
  onSeeAll?: () => void;
}

const portfolioItems = [
  { id: 1, category: 'Residencial', title: 'Biblioteca em Carvalho', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRic-XAlK2As5MNWgXcpml033PhgNRUZBI5aw&s' },
  { id: 2, category: 'Comercial', title: 'Recepção Hotel Luxo', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, category: 'Design', title: 'Mesa de Jantar Escultural', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop' },
  { id: 4, category: 'Residencial', title: 'Closet Minimalista', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2074&auto=format&fit=crop' },
  { id: 5, category: 'Design', title: 'Poltrona Curva', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop' },
  { id: 6, category: 'Comercial', title: 'Escritório Executivo', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Design'];

const Portfolio: React.FC<PortfolioProps> = ({ onSeeAll }) => {
  const [filter, setFilter] = useState('Todos');

  const filteredItems = filter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="projetos" className="py-24 bg-stone-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-amber-800 font-bold tracking-widest uppercase text-sm mb-4">Galeria de Obras</h2>
            <h3 className="text-4xl font-bold text-stone-900 serif">Portfólio Selecionado</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-xl aspect-[4/5] bg-stone-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</span>
                <h4 className="text-white text-2xl font-bold serif mb-6">{item.title}</h4>
                <button 
                  onClick={onSeeAll}
                  className="bg-amber-600 text-white py-3 px-6 rounded text-center text-sm font-bold hover:bg-amber-700 transition-all"
                >
                  Ver Detalhes do Projeto
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={onSeeAll}
            className="inline-flex items-center gap-4 bg-stone-900 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl hover:-translate-y-1"
          >
            Explorar Galeria Completa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
