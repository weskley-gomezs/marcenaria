
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'projects') => void;
  currentView: 'home' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home', href: '#inicio' },
    { name: 'Projetos', id: 'projects', href: '#projetos' },
    { name: 'Depoimentos', id: 'home', href: '#testimonials' },
    { name: 'Contato', id: 'home', href: '#contato' },
  ];

  const smoothScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    if (id === 'projects') {
      e.preventDefault();
      onNavigate('projects');
    } else if (currentView === 'projects' && id === 'home') {
      e.preventDefault();
      onNavigate('home');
      // Espera o componente home montar para fazer o scroll
      setTimeout(() => {
        smoothScrollTo(href);
      }, 100);
    } else if (currentView === 'home' && href.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || currentView === 'projects'
          ? 'bg-white/80 backdrop-blur-xl py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border-b border-stone-200/50' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo Section */}
        <button 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group cursor-pointer"
        >
          <span className={`text-xl sm:text-2xl font-bold tracking-[0.2em] serif transition-all duration-300 ${
            scrolled || currentView === 'projects' ? 'text-stone-900' : 'text-white'
          }`}>
            ARTESÃO <span className="text-amber-600 group-hover:text-amber-500 transition-colors">&</span> CO.
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id, link.href)}
              className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${
                scrolled || currentView === 'projects' ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber-600 transition-all duration-300 group-hover:w-full ${currentView === 'projects' && link.id === 'projects' ? 'w-full' : ''}`}></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..."
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5 active:scale-95 ${
              scrolled || currentView === 'projects'
                ? 'bg-green-600 text-white hover:bg-green-500' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-stone-900'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>Orçamento</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
