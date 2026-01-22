
import React from 'react';

const ContactForm: React.FC = () => {
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais...', '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-2xl border border-stone-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-stone-900 text-white flex flex-col justify-center">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Orçamento Sem Compromisso</h2>
            <h3 className="text-4xl md:text-5xl font-bold serif mb-8">Seu novo ambiente começa aqui.</h3>
            <p className="text-stone-400 mb-12 text-lg leading-relaxed">
              Deixe seus dados e uma breve descrição do que precisa. Entraremos em contato em menos de 24 horas úteis.
            </p>
            <div className="space-y-6">
              <a 
                href="https://wa.me/5561981535040?text=Ol%C3%A1%2C%20vi%20o%20site%20que%20voc%C3%AA%20fez%20e%20quero%20saber%20mais..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 hover:text-amber-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span>(61) 98153-5040</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span>contato@artesaoeco.com.br</span>
              </div>
            </div>
          </div>
          <div className="p-12 lg:p-20">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Nome Completo</label>
                <input type="text" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Como podemos te chamar?" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">WhatsApp</label>
                  <input type="tel" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none" placeholder="(61) 98153-5040" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Tipo de Projeto</label>
                  <select className="w-full bg-white border border-stone-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none">
                    <option>Cozinha Planejada</option>
                    <option>Quarto / Closet</option>
                    <option>Escritório / Home Office</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-white border border-stone-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Conte-nos um pouco sobre sua ideia..."></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-lg transition-all shadow-xl hover:scale-[1.02] active:scale-95">
                Enviar Solicitação via WhatsApp
              </button>
              <p className="text-center text-stone-400 text-xs mt-4">Atendimento imediato pelo celular.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
