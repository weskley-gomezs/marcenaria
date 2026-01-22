
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ProjectsPage from './components/ProjectsPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'projects'>('home');

  const navigateTo = (newView: 'home' | 'projects') => {
    setView(newView);
  };

  if (view === 'projects') {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navbar onNavigate={navigateTo} currentView={view} />
        <ProjectsPage onBack={() => {
          navigateTo('home');
          window.scrollTo(0, 0);
        }} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar onNavigate={navigateTo} currentView={view} />
      <main>
        <Hero />
        
        <WhyUs />
        
        <Services />
        
        <Testimonials />

        <Portfolio onSeeAll={() => navigateTo('projects')} />
        
        <HowItWorks />

        <ContactForm />

        {/* Final CTA Strip */}
        <section className="py-12 bg-green-600 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
            <h4 className="text-2xl font-bold serif">Prefere um atendimento imediato?</h4>
            <a 
              href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
            >
              Chamar no WhatsApp agora
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
