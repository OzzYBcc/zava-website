import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageData: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Custom Website Development & Web Apps | Zavabuild',
    description: 'High-performance, mobile-first websites and web applications that convert, rank, and scale. Tailored solutions launched in 2–4 weeks — no templates, no outsourcing.'
  },
  '/about': {
    title: 'About Zavabuild | High-Performance Web Agency for Growing Businesses',
    description: 'We build digital assets that grow your business — fast, secure, scalable. In-house team delivering custom websites and apps with clean code and measurable ROI.'
  },
  '/services': {
    title: 'Services | Zavabuild',
    description: 'Professional web development services including custom websites, web applications, and e-commerce solutions.'
  },
  '/portfolio': {
    title: 'Portfolio | Web Design, Apps & E-Commerce Projects | Zavabuild',
    description: 'Real results for SaaS, e-commerce, and B2B clients: faster sites, higher conversions, seamless scaling. See our latest custom web and app projects.'
  },
  '/contact': {
    title: 'Contact | Start Your Custom Web Project | Zavabuild',
    description: 'Ready for a faster, more secure, conversion-driven website or app? Tell us your goals — get a tailored proposal and free performance audit in 24 hours.'
  },
};

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const data = pageData[location.pathname] || pageData['/'];
    document.title = data.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', data.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const baseUrl = window.location.origin;
    canonicalLink.setAttribute('href', `${baseUrl}${location.pathname}`);
  }, [location]);

  return null;
}
