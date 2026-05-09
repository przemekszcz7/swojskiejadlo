/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Facebook, ChefHat, Heart, Leaf, UtensilsCrossed, Clock } from "lucide-react";

const MENU = [
  { 
    id: "zupy", 
    title: "Zupy", 
    items: [
      { name: "Rosół", price: "15zł" },
      { name: "Zupa rybna", price: "25zł" },
      { name: "Kwaśnica", price: "20zł" },
      { name: "Krem z cukinii", price: "20zł" },
      { name: "Barszcz ukraiński", price: "20zł" },
    ]
  },
  { 
    id: "daniaGlowne", 
    title: "Dania Główne", 
    items: [
      { name: "Golonka", price: "60zł" },
      { name: "Żeberka w sosie własnym", price: "45zł" },
      { name: "Schabowy", price: "40zł" },
      { name: "Drobiowy", price: "40zł" },
      { name: "Pieczeń w sosie", price: "40zł" },
      { name: "Placek po węgiersku", price: "45zł" },
      { name: "Żeberka BBQ", price: "60zł" },
      { name: "Pielmieni z barszczem", price: "25zł" },
    ]
  },
  { 
    id: "ryby", 
    title: "Ryby", 
    items: [
      { name: "Dorsz", price: "75zł" },
      { name: "Sandacz", price: "65zł" },
      { name: "Karmazyn", price: "65zł" },
    ]
  },
  { 
    id: "pierogi", 
    title: "Pierogi", 
    items: [
      { name: "Ruskie", price: "25zł" },
      { name: "Szpinak + feta", price: "25zł" },
      { name: "Na słodko (ser)", price: "25zł" },
    ]
  },
  { 
    id: "dodatki", 
    title: "Dodatki", 
    items: [
      { name: "Zestaw surówek", price: "10zł" },
      { name: "Frytki", price: "12zł" },
      { name: "Barszcz do pićia", price: "7zł" },
    ]
  },
];

const LOGO_URL = "https://i.postimg.cc/zGhQskQb/685366205-122095749639301957-916122174423954768-n.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState(MENU[0].id);

  const activeCategory = MENU.find(cat => cat.id === activeTab) || MENU[0];

  return (
    <div className="min-h-screen selection:bg-swojski-yellow selection:text-white wood-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-swojski-black border-b-2 border-swojski-yellow/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="w-14 h-14 rounded-full border-2 border-swojski-yellow shadow-inner relative z-10 object-cover"
              />
              <div className="absolute inset-0 bg-swojski-yellow blur-md opacity-20 animate-pulse" />
            </div>
            <span className="serif text-2xl font-bold text-swojski-yellow tracking-tighter drop-shadow-lg">Swojskie Jadło</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["menu", "o-nas", "kontakt"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-sm font-bold uppercase tracking-widest hover:text-swojski-yellow transition-all relative group"
              >
                {item.replace("-", " ")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-swojski-yellow transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <a 
            href="tel:693944644" 
            className="hidden md:flex items-center gap-2 bg-swojski-yellow hover:bg-swojski-yellow-light text-white px-6 py-3 rounded-2xl text-sm font-black transition-all shadow-[0_4px_0_rgb(120,70,5)] active:translate-y-1 active:shadow-none"
          >
            <Phone size={18} fill="currentColor" />
            <span>693 944 644</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-swojski-black via-swojski-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1547524960-8f2733036ee3?auto=format&fit=crop&q=80&w=1400" 
            className="w-full h-full object-cover grayscale-[0.2]"
            alt="Hero background"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-swojski-yellow/20 border border-swojski-yellow/50 px-4 py-1 rounded-full mb-6 text-swojski-yellow-light text-xs font-black uppercase tracking-[0.3em]">
              Autentyczna Polska Kuchnia
            </div>
            <h1 className="serif text-6xl md:text-8xl font-bold mb-8 text-white leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
              Smaki, które <span className="text-swojski-yellow italic">pokochasz</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto leading-relaxed serif italic drop-shadow-md">
              "Świeże, swojskie jedzenie i porządne porcje. Przyjdź, spróbuj i oceń sam."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#menu" 
                className="group relative bg-swojski-green text-white px-10 py-5 rounded-[2rem] text-xl font-black transition-all shadow-[0_8px_0_rgb(15,26,15)] hover:shadow-[0_4px_0_rgb(15,26,15)] hover:translate-y-1 active:translate-y-2 active:shadow-none overflow-hidden"
              >
                <span className="relative z-10">Odkryj Menu</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a 
                href="#kontakt" 
                className="text-white text-lg font-bold hover:text-swojski-yellow transition-all flex items-center gap-2 group"
              >
                Gdzie jesteśmy?
                <MapPin className="group-hover:translate-y-[-2px] transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="o-nas" className="py-32 relative wood-brown-pattern paper-texture inner-shadow">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-swojski-black to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Leaf, title: "Naturalne składniki", desc: "Zawsze świeże produkty od lokalnych dostawców, bez zbędnych dodatków." },
              { icon: ChefHat, title: "Tradycyjne receptury", desc: "Podstawą naszej kuchni są sprawdzone, domowe przepisy." },
              { icon: UtensilsCrossed, title: "Domowa atmosfera", desc: "Drewniane wnętrza, zapach świeżych ziół i ciepło domowego ogniska." },
              { icon: Heart, title: "Gościnność z sercem", desc: "U nas poczujesz się wyjątkowo - uśmiech to nasz standard." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rustic-card p-10 group hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <div className="w-16 h-16 bg-swojski-yellow text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                  <feature.icon size={32} />
                </div>
                <h3 className="serif text-2xl font-bold mb-4 text-white group-hover:text-swojski-yellow transition-colors">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed italic">{feature.desc}</p>
                <div className="absolute -bottom-6 -right-6 text-white rotate-[-15deg] opacity-[0.03] group-hover:opacity-10 transition-opacity">
                   <feature.icon size={120} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-stone-950 wood-pattern border-y border-swojski-yellow/10 ring-1 ring-inset ring-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
             <span className="serif text-swojski-yellow font-bold italic block mb-2">Zapraszamy do stołu</span>
             <h2 className="serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl">Nasze Specjały</h2>
             <div className="flex items-center justify-center gap-4">
               <div className="h-[2px] w-12 bg-swojski-yellow" />
               <UtensilsCrossed className="text-swojski-yellow" size={24} />
               <div className="h-[2px] w-12 bg-swojski-yellow" />
             </div>
          </div>
          
          {/* Tabs Container */}
          <div className="bg-stone-900 p-3 rounded-[2.5rem] border-2 border-swojski-yellow/20 shadow-inner max-w-fit mx-auto mb-20 flex flex-wrap justify-center gap-2">
            {MENU.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-8 py-4 rounded-[2rem] text-sm font-black uppercase tracking-widest transition-all relative overflow-hidden group ${
                  activeTab === category.id 
                    ? "text-white" 
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {activeTab === category.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-swojski-yellow to-swojski-yellow/80 z-0 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 group-active:scale-95 transition-transform inline-block">
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* Menu Content */}
          <div className="rustic-card p-12 md:p-20 relative overflow-hidden ivory-smooth shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-stone-200">
            <div className="absolute top-0 left-0 w-full h-1 bg-swojski-yellow shadow-sm" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-left"
              >
                <div className="mb-12 text-center">
                  <h4 className="serif text-3xl font-bold text-stone-900 mb-2">{activeCategory.title}</h4>
                  <p className="text-swojski-yellow-dark text-sm font-bold uppercase tracking-tighter opacity-80">
                    {activeTab === 'daniaGlowne' || activeTab === 'ryby' 
                      ? "Ziemniaki/frytki + zestaw surówek w cenie" 
                      : "Tradycyjny smak i aromat"}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
                  {activeCategory.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-start group"
                    >
                      <div className="flex-1">
                        <span className="text-xl font-bold text-stone-800 group-hover:text-swojski-yellow transition-colors leading-tight italic">{item.name}</span>
                        <div className="w-full h-px border-b-2 border-stone-200 mt-2" />
                      </div>
                      <div className="ml-6 shrink-0 bg-stone-100 px-3 py-1 rounded-lg border border-stone-200 shadow-sm">
                        <span className="serif text-xl font-black text-swojski-yellow-dark uppercase">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-16 text-center">
               <div className="inline-flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest bg-stone-100 px-4 py-2 rounded-full border border-stone-200">
                 <Heart size={12} className="text-red-600" fill="currentColor" />
                 <span>Zrobione z miłością do jedzenia</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-20 bg-swojski-green-dark relative overflow-hidden">
        <div className="absolute inset-0 wood-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-10 md:gap-16 text-white">
          <div className="flex items-center gap-6 group w-full md:w-auto md:min-w-[280px]">
            <div className="shrink-0 w-16 h-16 bg-swojski-green border-2 border-swojski-yellow rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Clock size={32} />
            </div>
            <div>
              <span className="block text-swojski-yellow text-xs font-black uppercase tracking-widest mb-1">otwarte</span>
              <span className="serif text-xl md:text-2xl font-bold md:whitespace-nowrap">Codziennie od 12:00</span>
            </div>
          </div>
          
          <div className="hidden md:block w-[1px] h-16 bg-swojski-yellow/30" />
          
          <div className="flex items-center gap-6 group w-full md:w-auto md:min-w-[280px]">
            <div className="shrink-0 w-16 h-16 bg-swojski-green border-2 border-swojski-yellow rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <div>
              <span className="block text-swojski-yellow text-xs font-black uppercase tracking-widest mb-1">Dzwoń do nas</span>
              <span className="serif text-xl md:text-2xl font-bold md:whitespace-nowrap">693 944 644</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Frame */}
      <section id="kontakt" className="py-32 bg-swojski-black relative overflow-hidden">
        <div className="absolute inset-0 wood-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-stone-900 border-2 border-swojski-yellow/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12">
             <div className="lg:col-span-4 p-12 md:p-16 space-y-12 bg-stone-950 border-r-2 border-white/5">
                <div>
                   <h2 className="serif text-4xl font-bold text-white mb-4">Znajdź drogę</h2>
                   <p className="text-stone-400 italic">Zapraszamy w progi naszej restauracji w Smołdzińskim Lesie.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <MapPin className="text-swojski-yellow shrink-0 mt-1" size={28} />
                    <div>
                      <h4 className="font-black text-stone-300 text-xs uppercase tracking-widest mb-2">Adres lokalu</h4>
                      <p className="text-xl text-stone-100 serif italic">Smołdziński Las 49<br />76-214 Pomorskie</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <Phone className="text-swojski-yellow shrink-0 mt-1" size={28} />
                    <div>
                      <h4 className="font-black text-stone-300 text-xs uppercase tracking-widest mb-2">Kontakt telefoniczny</h4>
                      <a href="tel:693944644" className="text-2xl text-stone-100 serif font-bold hover:text-swojski-yellow transition-colors underline decoration-swojski-yellow/30 underline-offset-8">693 944 644</a>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61589058721164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                  >
                    <Facebook size={24} fill="white" />
                    <span>Nasz Fanpage</span>
                  </a>
                </div>
             </div>
             
             <div className="lg:col-span-8 min-h-[450px] lg:h-auto relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.989138681419!2d17.224404377215834!3d54.69221877317712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe6dcd06116363%3A0x23efdc2ea1779688!2zU21vxYJkemnFhHNraSBMYXMgNDksIDc2LTIxNCBTbW_FgmR6acWEc2tpIExhcw!5e0!3m2!1spl!2spl!4v1778314608110!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_30px_100px_rgba(0,0,0,0.5)]" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-swojski-black relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center">
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="w-16 h-16 rounded-full border-2 border-swojski-yellow mb-8 shadow-2xl object-cover"
              loading="lazy"
            />
            <h3 className="serif text-3xl font-bold text-white mb-2">Restauracja Swojskie Jadło</h3>
            <p className="text-swojski-yellow text-sm font-black uppercase tracking-[0.5em] mb-12">Najlepsza kuchnia w regionie</p>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold uppercase tracking-widest text-stone-500 mb-16">
              <a href="#menu" className="hover:text-swojski-yellow transition-colors underline decoration-transparent hover:decoration-swojski-yellow underline-offset-4">Menu</a>
              <a href="#o-nas" className="hover:text-swojski-yellow transition-colors underline decoration-transparent hover:decoration-swojski-yellow underline-offset-4">O nas</a>
              <a href="#kontakt" className="hover:text-swojski-yellow transition-colors underline decoration-transparent hover:decoration-swojski-yellow underline-offset-4">Kontakt</a>
              <a href="https://www.facebook.com/profile.php?id=61589058721164" target="_blank" className="hover:text-swojski-yellow transition-colors underline decoration-transparent hover:decoration-swojski-yellow underline-offset-4">Facebook</a>
            </div>

            <div className="w-full h-px bg-white/5 mb-8" />
            <p className="text-stone-600 text-xs">© 2026 Restauracja Swojskie Jadło. Design inspirowany polską gościnnością.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

