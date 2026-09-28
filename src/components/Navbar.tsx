'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'EDUCATION', 'CERTIFICATIONS', 'CONTACT'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-widest flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="text-[#E10600]">STARK</span>
            <span className="text-[#00E5FF]">SYS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xs font-display tracking-wider text-gray-300 hover:text-[#00E5FF] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E10600] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a href="/resume.pdf" download className="ml-4 px-4 py-2 text-xs font-display border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors rounded-sm glow-text-cyan shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]">
              [ DOWNLOAD RESUME ]
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-[#E10600]" /> : <Menu size={24} className="text-[#00E5FF]" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center space-y-6 pt-20"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xl font-display tracking-widest text-white hover:text-[#00E5FF] transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="/resume.pdf" download className="mt-8 px-6 py-3 font-display border border-[#E10600] text-[#E10600] hover:bg-[#E10600] hover:text-white transition-colors">
              [ DOWNLOAD RESUME ]
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
