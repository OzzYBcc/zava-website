import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' }
  ];

  const handleStartProject = () => {
    const event = new CustomEvent('openQuestionnaire');
    window.dispatchEvent(event);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#f9f9f9]/80 backdrop-blur-md border-b border-[#1a1a1a]/5 py-4'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-tight font-medium z-50 relative">
            Zava.
          </Link>

          <div className="hidden md:flex space-x-12 items-center font-sans text-sm tracking-widest uppercase text-[#1a1a1a]">
            {navLinks.map((item) => (
              <Link key={item.name} to={item.to} className="group relative overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  {item.name}
                </span>
                <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#8c8c8c]">
                  {item.name}
                </span>
              </Link>
            ))}
            <button
              onClick={handleStartProject}
              className="border border-[#1a1a1a]/20 px-6 py-2 rounded-full hover:bg-[#1a1a1a] hover:text-[#f9f9f9] transition-all duration-300"
            >
              Start Project
            </button>
          </div>

          <button
            className="md:hidden z-50 text-[#1a1a1a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#f9f9f9] z-40 flex flex-col justify-center px-6"
        >
          <div className="flex flex-col space-y-8 font-serif text-4xl text-[#1a1a1a]">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#1a1a1a]/10 pb-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
