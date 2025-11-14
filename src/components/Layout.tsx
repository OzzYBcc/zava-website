import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import NewsletterSignup from './NewsletterSignup';
import QuestionnaireModal from './QuestionnaireModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <nav className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            ZAVA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-100 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={() => setQuestionnaireOpen(true)} className="bg-white text-black hover:bg-gray-200">
              Start Project
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className="h-0.5 bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-100 hover:text-gray-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={() => setQuestionnaireOpen(true)} className="bg-white text-black hover:bg-gray-200 w-full">
                Start Project
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-white text-black py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">ZAVA</h3>
              <p className="text-gray-600">
                Premium websites & web apps for ambitious businesses
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Stay updated with our latest work and insights</p>
              <NewsletterSignup />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 ZAVA – info@zavabuild.com</p>
          </div>
        </div>
      </footer>

      <QuestionnaireModal open={questionnaireOpen} onOpenChange={setQuestionnaireOpen} />
    </>
  );
}
