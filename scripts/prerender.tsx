import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App';
import { AuthProvider } from '../src/context/AuthContext';
import { ProductProvider } from '../src/context/ProductContext';
import { CategoryProvider } from '../src/context/CategoryContext';
import { SettingsProvider } from '../src/context/SettingsContext';
import { IndustryProvider } from '../src/context/IndustryContext';
import { SearchModalProvider } from '../src/context/SearchModalContext';
import { BlogProvider } from '../src/context/BlogContext';
import { CartProvider } from '../src/context/CartContext';

import { PRODUCTS, INDUSTRIES } from '../src/constants';
import { TECHNICAL_BLOGS } from '../src/data/blogData';

const _dirname = path.resolve('./scripts');

const routes = [
    '/',
    '/about',
    '/products',
    '/industries',
    '/blog',
    '/contact',
    '/request-quote',
    '/privacy-policy',
    ...PRODUCTS.map(p => `/product/${p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '')}`),
    ...INDUSTRIES.map(i => `/products?industry=${i.id}`),
    ...TECHNICAL_BLOGS.map(b => `/blog/${b.id}`)
];

const templatePath = path.resolve(_dirname, '../dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

console.log(`Prerendering ${routes.length} routes...`);

for (let url of routes) {
    const helmetContext: any = {};
    const appElement = (
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={url}>
                    <SearchModalProvider>
                        <AuthProvider>
                            <SettingsProvider>
                                <ProductProvider>
                                    <CategoryProvider>
                                        <IndustryProvider>
                                            <BlogProvider>
                                                <CartProvider>
                                                    <App />
                                                </CartProvider>
                                            </BlogProvider>
                                        </IndustryProvider>
                                    </CategoryProvider>
                                </ProductProvider>
                            </SettingsProvider>
                        </AuthProvider>
                    </SearchModalProvider>
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>
    );

    const htmlStream = ReactDOMServer.renderToString(appElement);
    const { helmet } = helmetContext;

    let finalHtml = template.replace(
        '<!-- Google Tag Manager -->',
        `
        ${helmet.title.toString()}
        ${helmet.priority.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
        <!-- Google Tag Manager -->`
    );

    finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${htmlStream}</div>`);

    // Determine output file path
    // Remove query params for file system
    const [pathname, search] = url.split('?');
    // We don't prerender query params easily, but we can generate directories
    
    let outputPath;
    if (pathname === '/') {
        outputPath = path.resolve(_dirname, '../dist/index.html');
    } else {
        const dir = path.resolve(_dirname, '../dist', pathname.substring(1));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        outputPath = path.resolve(dir, 'index.html');
    }

    // Only save if it's a known non-query path, we skip query ones physically because Cloudflare handles ?industry=... dynamically
    // Wait, if it has query, we can't save it as file? 
    // Actually we can just skip generating HTML for query routes and let SPA handle them, OR we don't include them in the prerender routes
    if (!search && pathname !== '/') {
         fs.writeFileSync(outputPath, finalHtml);
         console.log(`Prerendered: ${pathname}`);
    } else if (pathname === '/') {
         fs.writeFileSync(outputPath, finalHtml);
         console.log(`Prerendered: /`);
    } else {
         // Query routes rely on SPA or we could generate industry directories?
    }
}

console.log('Prerendering complete!');
