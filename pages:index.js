import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function AIPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [briefForm, setBriefForm] = useState({ name: '', email: '', message: '' });

  const services = [
    { name: 'Personal AI Portrait', price: '$55–$150' },
    { name: 'AI Model + Product', price: '$150–$450' },
    { name: 'Product Photography', price: '$80–$220' },
    { name: 'Video & Motion', price: '$80–$550' }
  ];

  const portfolio = [
    { num: '01', title: 'The Image That Speaks', desc: 'Personal AI Portrait' },
    { num: '02', title: 'Model Meets Product', desc: 'AI Model + Product' },
    { num: '03', title: 'Every Detail Matters', desc: 'Product Photography' },
    { num: '04', title: 'Skin. Light. Silence.', desc: 'Beauty' },
    { num: '05', title: 'Calm in Every Frame', desc: 'Wellness' },
    { num: '06', title: 'Taste in Every Shot', desc: 'Food & Beverage' },
    { num: '07', title: 'Beyond Categories', desc: 'Dark Editorial' },
    { num: '08', title: 'Motion That Captivates', desc: 'Video & Motion' }
  ];

  const process = [
    { num: '01', title: 'Share Your Vision', text: 'Tell me about your brand, mood, and goals.' },
    { num: '02', title: 'Creative Direction', text: 'I develop prompts, style references, and mood board.' },
    { num: '03', title: 'Production', text: 'AI-powered visuals with draft images for review.' },
    { num: '04', title: 'Delivery', text: 'Final files in your format. Up to 2 revision rounds.' }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Beyond Frame</div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex gap-8">
            {['Work', 'Services', 'Process', 'Pricing', 'FAQ', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">Beyond the Frame</h1>
          <p className="text-xl text-gray-300">Cinematic AI visuals for brands that have something to say. AI is the tool. You are the story.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button onClick={() => setChatOpen(true)} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Start a Project →
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-lg font-semibold hover:border-white/60 transition">
              View Work ↓
            </button>
          </div>

          <p className="text-gray-400 pt-8 border-t border-white/20">50+ projects · 3 continents · brands from AU, UAE, SG</p>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 text-sm font-semibold mb-2">About me</p>
              <h2 className="text-5xl font-bold mb-4">Neuro Creator AI</h2>
              <p className="text-xl text-gray-300 mb-4">AI Creator</p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I work at the intersection of AI and visual storytelling. Every image is deliberate — light, mood, concept crafted from prompt to pixel. Working globally.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-blue-400 hover:text-blue-300">Instagram →</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Telegram →</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Email →</a>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-lg aspect-square flex items-center justify-center border border-white/10">
              <p className="text-gray-600">Gallery Images</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">What I Create</h2>
          <div className="space-y-20">
            {portfolio.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-blue-400 font-semibold mb-2">{item.num}</p>
                  <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg aspect-square flex items-center justify-center border border-white/10">
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">From Idea to Final Frame</h2>
          <p className="text-gray-300 mb-16">How it works</p>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, i) => (
              <div key={i} className="bg-gray-900/30 border border-white/10 rounded-lg p-8 hover:border-white/30 transition">
                <p className="text-blue-400 font-bold text-2xl mb-2">{step.num}</p>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">What I Create</h2>
          <p className="text-gray-300 mb-12">Services & Pricing</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-900/30 border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{s.name}</h3>
                <p className="text-blue-400 text-xl font-semibold">{s.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600/20 border border-blue-400/50 rounded-lg p-8">
            <p className="text-lg"><strong>First project? Get 20% off</strong> — mention when reaching out. <strong>Rush delivery (48h): +50%</strong></p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Questions & Answers</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does a project take?', a: 'Single images: 2–5 days. Videos: 5–10 days. Rush available (+50%).' },
              { q: 'How many revisions?', a: 'Up to 2 rounds included. Additional: $15 each.' },
              { q: 'What do I need to provide?', a: 'A brief about your brand, mood, and goals. References welcome but not required.' },
              { q: 'What format for files?', a: 'PNG/WEBP for images. MP4 for videos. Custom formats on request.' },
              { q: 'Do you work internationally?', a: 'Yes! Australia, UAE, Singapore, Europe, globally. English communication.' },
              { q: 'Do I own the images?', a: 'Yes, full ownership and commercial rights upon final payment.' }
            ].map((item, i) => (
              <details key={i} className="group border border-white/10 rounded-lg p-6 hover:border-white/30 transition cursor-pointer">
                <summary className="font-semibold text-lg flex justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-300 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Tell Me About Your Project</h2>
          <p className="text-gray-300 text-lg mb-8">Fill in the brief — I'll respond within 24 hours.</p>
          
          <button onClick={() => setChatOpen(true)} className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition mb-8">
            📋 Open Interactive Brief →
          </button>

          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full bg-gray-900/50 border border-white/10 rounded px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" />
            <input type="email" placeholder="Email" className="w-full bg-gray-900/50 border border-white/10 rounded px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" />
            <textarea placeholder="Your message" rows="5" className="w-full bg-gray-900/50 border border-white/10 rounded px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"></textarea>
            <button type="submit" className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Send Request →
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-gray-400">Neuro Creator AI © 2025 · AI is the tool. You are the story.</p>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-blue-400 hover:text-blue-300">Instagram</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Telegram</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Email</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="bg-gray-900 border border-white/20 rounded-2xl w-96 max-h-96 flex flex-col mb-4 shadow-2xl">
            <div className="bg-blue-600 p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="font-bold">Start Your Brief</h3>
              <button onClick={() => setChatOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="text-gray-300 mb-4">Choose your style:</p>
              <div className="space-y-2">
                {['Dark Editorial', 'Cinematic', 'Luxury', 'Minimalist', 'Surreal', 'Wellness', 'Food'].map(style => (
                  <button key={style} className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition">
                    {style}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 p-4 space-y-3">
              <input type="text" placeholder="Your name" value={briefForm.name} onChange={(e) => setBriefForm({...briefForm, name: e.target.value})} className="w-full bg-gray-800 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none" />
              <input type="email" placeholder="Email" value={briefForm.email} onChange={(e) => setBriefForm({...briefForm, email: e.target.value})} className="w-full bg-gray-800 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none" />
              <textarea placeholder="Tell me about your project..." rows="3" value={briefForm.message} onChange={(e) => setBriefForm({...briefForm, message: e.target.value})} className="w-full bg-gray-800 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none resize-none"></textarea>
              <button onClick={() => { setChatOpen(false); alert('Brief submitted! Check your email.'); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition text-sm">
                Send Brief →
              </button>
            </div>
          </div>
        )}
        
        <button onClick={() => setChatOpen(!chatOpen)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-xl transition hover:scale-110 relative">
          <MessageCircle size={24} />
          <span className="text-xs font-bold mt-1">Brief</span>
          {!chatOpen && <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>}
        </button>
      </div>
    </div>
  );
}
