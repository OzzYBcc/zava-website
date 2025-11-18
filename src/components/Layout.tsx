import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import NewsletterSignup from './NewsletterSignup';
import QuestionnaireModal from './QuestionnaireModal';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (currentScrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { to: '/', label: '• Home' },
    { to: '/about', label: '• About' },
    { to: '/services', label: '• Services' },
    { to: '/portfolio', label: '• Portfolio' },
    { to: '/contact', label: '• Contact' },
  ];

  return (
    <>
      <div
        className={`fixed left-0 h-0.5 bg-primary transition-all duration-300 z-50 ${navbarVisible ? 'top-16' : 'top-0'}`}
        style={{ width: `${scrollProgress}%` }}
      />
      <header className={`sticky top-0 z-40 bg-background border-b border-border transition-all duration-300 ${navbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <nav className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center transition-opacity duration-300 hover:opacity-80">
            <img src={theme === 'dark' ? '/logo3-dark.svg' : '/logo3-light.svg'} alt="ZAVA" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button onClick={() => setQuestionnaireOpen(true)} className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300">
              Start Project
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="p-2 text-foreground transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full max-w-xs pt-3 mt-1 border-t border-border">
                <Button
                  onClick={() => setQuestionnaireOpen(true)}
                  className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300 w-full h-11 text-base"
                >
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-primary text-primary-foreground py-16 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">ZAVA</h3>
              <p className="text-muted-foreground transition-colors duration-300">
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
                    className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4 transition-colors duration-300">Stay updated with our latest work and insights</p>
              <NewsletterSignup />
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm transition-colors duration-300">
            <p>&copy; 2025 ZAVA – info@zavabuild.com</p>
          </div>
        </div>
      </footer>

      <QuestionnaireModal open={questionnaireOpen} onOpenChange={setQuestionnaireOpen} />
    </>
  );
}
