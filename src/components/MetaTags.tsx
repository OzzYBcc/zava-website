import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMetaData {
  title: string;
  description: string;
  url: string;
}

const OG_IMAGE = '/Zava OG Template.jpg';

const pageMetaData: Record<string, PageMetaData> = {
  '/': {
    title: 'Zava - Premium Web Development & Design Agency',
    description: 'Transform your digital presence with stunning websites and applications. Expert development, modern design, and seamless user experiences.',
    url: 'https://zavabuild.com'
  },
  '/about': {
    title: 'About Zava - Our Story & Mission',
    description: 'Learn about our passionate team of developers and designers dedicated to creating exceptional digital experiences for forward-thinking businesses.',
    url: 'https://zavabuild.com/about'
  },
  '/services': {
    title: 'Our Services - Web Development & Design Solutions',
    description: 'Comprehensive web development services including custom websites, web applications, e-commerce solutions, and digital transformation consulting.',
    url: 'https://zavabuild.com/services'
  },
  '/portfolio': {
    title: 'Portfolio - Our Best Work & Projects',
    description: 'Explore our portfolio of successful projects and see how we\'ve helped businesses achieve their digital goals with innovative solutions.',
    url: 'https://zavabuild.com/portfolio'
  },
  '/contact': {
    title: 'Contact Zava - Let\'s Build Something Amazing',
    description: 'Ready to start your project? Get in touch with our team to discuss how we can help bring your vision to life.',
    url: 'https://zavabuild.com/contact'
  }
};

export default function MetaTags() {
  const location = useLocation();

  useEffect(() => {
    const metaData = pageMetaData[location.pathname] || pageMetaData['/'];

    updateMetaTag('og:title', metaData.title);
    updateMetaTag('og:description', metaData.description);
    updateMetaTag('og:image', OG_IMAGE);
    updateMetaTag('og:url', metaData.url);
    updateMetaTag('og:type', 'website');

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metaData.title);
    updateMetaTag('twitter:description', metaData.description);
    updateMetaTag('twitter:image', OG_IMAGE);

    updateMetaTag('description', metaData.description, 'name');
  }, [location]);

  return null;
}

function updateMetaTag(property: string, content: string, attributeName: string = 'property') {
  let element = document.querySelector(`meta[${attributeName}="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}
