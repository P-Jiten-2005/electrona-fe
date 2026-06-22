import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PerformanceSystem from './components/PerformanceSystem';
import ProductKitShowcase from './components/ProductKitShowcase';
import PerformanceJourney from './components/PerformanceJourney';
import AthleteTestimonials from './components/AthleteTestimonials';
import SportsHub from './components/SportsHub';
import ProductsTab from './components/ProductsTab';
import AboutTab from './components/AboutTab';
import Footer from './components/Footer';
import { Zap, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('HOME');
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [targetTab, setTargetTab] = useState<PageTab>('HOME');
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hi! Welcome to Electrona. How can we help you today?' }
  ]);
  const [chatInput, setChatInput] = useState<string>('');

  // Trigger cinematic horizontal 0.8s transition
  const handleTabChange = (newTab: PageTab) => {
    if (newTab === activeTab) return;
    
    // Determine horizontal translation direction based on tab index comparison
    const tabsOrder: PageTab[] = ['HOME', 'PRODUCTS', 'SPORTS', 'ABOUT'];
    const currentIdx = tabsOrder.indexOf(activeTab);
    const targetIdx = tabsOrder.indexOf(newTab);
    setDirection(targetIdx > currentIdx ? 'right' : 'left');

    setTargetTab(newTab);
    setTransitioning(true);

    // Swap the view mid-sweep at peak opacity (400ms)
    setTimeout(() => {
      setActiveTab(newTab);
    }, 400);

    // Complete the sweep transition at 800ms
    setTimeout(() => {
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    }, 850);
  };

  const handleOpenStore = () => {
    handleTabChange('PRODUCTS');
    setTimeout(() => {
      const checkoutElem = document.getElementById('products-checkout-simulator');
      if (checkoutElem) {
        checkoutElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden font-sans select-none relative selection:bg-brand-orange selection:text-white">
      
      {/* Cinematic Sweep Transition Overlay */}
      <div 
        className={`fixed inset-0 z-100 pointer-events-none flex items-center justify-center transition-all duration-800 ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}
        id="page-sweep-overlay"
      >
        {/* Fullscreen horizontal moving sweep */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-brand-orange/95 via-brand-cyan/95 to-purple-800/95 transition-all duration-800 transform ${
            transitioning 
              ? direction === 'right' 
                ? 'translate-x-0 scale-x-100' 
                : 'translate-x-0 scale-x-100'
              : direction === 'right'
                ? 'translate-x-[100%] scale-x-0'
                : 'translate-x-[-100%] scale-x-0'
          }`}
          style={{ 
            transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' 
          }}
        />

        {/* Soft Volumetric Light Diffusion & Gaussian Blur Flare instead of the hard white line */}
        {transitioning && (
          <div className="absolute inset-0 pointer-events-none mix-blend-screen filter blur-[120px] opacity-40" 
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(0,217,255,0.35) 45%, rgba(255,107,0,0.1) 75%, transparent 100%)',
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform',
            }}
          />
        )}

        {/* Moving energy text indicators */}
        <div className="relative font-display font-black text-4xl m-4 tracking-widest text-white flex items-center gap-3 select-none">
          <Zap className="w-8 h-8 text-white animate-bounce" />
          SWEEPING HIGH-VOLTAGE HYDRATION CORE...
        </div>
      </div>

      {/* Global Minimal Navigation Menu */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        onOpenStore={handleOpenStore}
      />

      {/* Dynamic Slide Pages Frame */}
      <main 
        className={`transition-all duration-700 ${
          transitioning 
            ? 'blur-md scale-[0.98]' 
            : 'blur-0 scale-100'
        }`}
        id="telemetry-screen-container"
      >
        {activeTab === 'HOME' && (
          <div className="animate-fade-in">
            {/* S1: Dynamic Glowing Hero */}
            <HeroSection 
              onExplore={() => {
                const perfSec = document.getElementById('science-section');
                if (perfSec) {
                  perfSec.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
              onViewProducts={() => handleTabChange('PRODUCTS')} 
            />

            {/* S4: Chronological timeline of the athlete life-cycle */}
            <PerformanceJourney />

            {/* S5: Premium Flavour Performance showcase card */}
            <ProductKitShowcase />

            {/* S7: Infinite moving tags marquee and elite athlete reviews */}
            <AthleteTestimonials />
          </div>
        )}

        {activeTab === 'PRODUCTS' && (
          <div className="animate-fade-in">
            <ProductsTab />
          </div>
        )}

        {activeTab === 'SPORTS' && (
          <div className="animate-fade-in">
            <SportsHub />
          </div>
        )}

        {activeTab === 'ABOUT' && (
          <div className="animate-fade-in">
            <AboutTab />
          </div>
        )}
      </main>

      {/* High-voltage diagnostic modular footer */}
      <Footer 
        setActiveTab={handleTabChange}
        onOpenStore={handleOpenStore}
      />

      {/* WhatsApp & Chatbot Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/918179949749" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.855.001-2.634-1.024-5.112-2.89-6.982A9.8 9.8 0 0 0 12.008 1.83C6.58 1.83 2.16 6.246 2.158 11.683c-.001 1.573.418 3.109 1.21 4.479l-.997 3.64 3.73-.978h-.001zM17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.275-.1-.476-.15-.676.15-.2.3-.778 1-.955 1.15-.177.15-.353.177-.655.027a9.23 9.23 0 0 1-2.433-1.5c-.742-.662-1.244-1.479-1.39-1.727-.146-.25-.015-.386.11-.511.112-.113.25-.3.376-.45.124-.15.166-.255.25-.425.083-.17.042-.32-.021-.47-.063-.15-.476-1.15-.655-1.58-.175-.428-.352-.37-.476-.375-.12-.005-.26-.005-.398-.005-.14 0-.367.052-.56.26-.191.208-.73.712-.73 1.737 0 1.025.746 2.01 1.85 2.16 1.1.15 2.155-.83 2.155-1.743 0-.09-.007-.18-.02-.27z" />
          </svg>
        </a>

        {/* Chatbot Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 bg-neutral-950 text-white border border-[#FF6B00]/20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[#FF6B00]/20 hover:border-[#FF6B00]/50 transition-all duration-300 cursor-pointer"
          title="Ask Electrona AI"
        >
          <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Chatbot Side Bar Panel */}
      <div 
        className={`fixed top-0 right-0 h-screen w-80 sm:w-96 bg-black border-l border-[#FF6B00] shadow-2xl z-50 transition-all duration-500 ease-in-out flex flex-col justify-between ${
          isChatOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#FF6B00]/20 flex justify-between items-center bg-neutral-950">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="font-display font-black text-sm tracking-widest text-white">ELECTRONA AI</span>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 font-sans text-xs scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-left leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-[#FF6B00] text-white rounded-tr-none shadow-md shadow-[#FF6B00]/10' 
                    : 'bg-white text-black rounded-tl-none font-medium'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (!chatInput.trim()) return;

            const userText = chatInput;
            setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
            setChatInput('');

            // Delayed bot reply
            setTimeout(() => {
              setMessages((prev) => [
                ...prev, 
                { sender: 'bot', text: 'I am not available or coming soon!' }
              ]);
            }, 600);
          }}
          className="p-4 border-t border-[#FF6B00]/20 bg-neutral-950 flex gap-2"
        >
          <input 
            type="text" 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-black border border-white/15 rounded-xl px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
          />
          <button 
            type="submit"
            className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>

    </div>
  );
}
