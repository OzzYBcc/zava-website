import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getOGData, BASE_URL, getOGImageUrl } from '@/lib/og-config';

export default function SEOHelmet() {
  const location = useLocation();
  const ogData = getOGData(location.pathname);
  const fullUrl = `${BASE_URL}${ogData.path}`;
  const ogImageUrl = getOGImageUrl(ogData.path);

  return (
    <Helmet>
      <title>{ogData.title}</title>
      <meta name="description" content={ogData.description} />

      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zava Build" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" content={ogData.description} />
      <meta name="twitter:image" content={ogImageUrl} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
