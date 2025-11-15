export const BASE_URL = 'https://zavabuild.com';

export interface OGData {
  title: string;
  description: string;
  path: string;
}

export const ogData: Record<string, OGData> = {
  '/': {
    title: 'Zava Build',
    description: 'Digital experiences that scale',
    path: '/',
  },
  '/about': {
    title: 'About Zava',
    description: 'Meet the team',
    path: '/about',
  },
  '/services': {
    title: 'Our Services',
    description: 'Web, Apps, Cloud, AI',
    path: '/services',
  },
  '/portfolio': {
    title: 'Our Portfolio',
    description: 'Real projects, real results',
    path: '/portfolio',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Start your project',
    path: '/contact',
  },
};

export const defaultOGData: OGData = {
  title: 'Zava Build',
  description: 'Digital experiences that scale',
  path: '/',
};

export function getOGData(pathname: string): OGData {
  return ogData[pathname] || defaultOGData;
}

export function getOGImageUrl(pathname: string): string {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mozsjjbrzlkllmvmwhdh.supabase.co';
  return `${supabaseUrl}/functions/v1/og?path=${encodeURIComponent(pathname)}`;
}
