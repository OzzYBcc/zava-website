import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const routeData: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'Zava Build',
    desc: 'Digital experiences that scale',
  },
  '/about': {
    title: 'About Zava',
    desc: 'Meet the team',
  },
  '/services': {
    title: 'Our Services',
    desc: 'Web, Apps, Cloud, AI',
  },
  '/portfolio': {
    title: 'Our Portfolio',
    desc: 'Real projects, real results',
  },
  '/contact': {
    title: 'Contact Us',
    desc: 'Start your project',
  },
};

const defaultData = {
  title: 'Zava Build',
  desc: 'Digital experiences that scale',
};

function generateSVG(title: string, desc: string): string {
  return `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0F172A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1E293B;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      
      <text
        x="600"
        y="280"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="72"
        font-weight="bold"
        fill="#FFFFFF"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${escapeXml(title)}
      </text>
      
      <text
        x="600"
        y="380"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="36"
        fill="#CBD5E1"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${escapeXml(desc)}
      </text>
      
      <text
        x="600"
        y="550"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="28"
        font-weight="bold"
        fill="#FFFFFF"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ZAVA
      </text>
    </svg>
  `;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    const url = new URL(req.url);
    const path = url.searchParams.get('path') || '/';
    
    const data = routeData[path] || defaultData;
    const svg = generateSVG(data.title, data.desc);

    return new Response(svg, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    const errorSvg = generateSVG('Zava Build', 'Digital experiences that scale');
    
    return new Response(errorSvg, {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/svg+xml',
      },
    });
  }
});