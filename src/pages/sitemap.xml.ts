import { siteConfig } from '../data/siteConfig';
import { pages } from '../data/pages';
export function GET() {
const routes = ['',...pages.filter(p => !p.landing).map(p=>p.slug)];
return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route=>`<url><loc>${siteConfig.origin}/${route ? route+'/' : ''}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
}
