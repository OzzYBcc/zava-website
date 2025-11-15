import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/portfolio': 'Portfolio',
  '/contact': 'Contact',
};

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = pageTitles[location.pathname] || 'Home';
    document.title = `Zava - ${pageTitle}`;
  }, [location]);

  return null;
}
