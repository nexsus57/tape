import fs from 'fs';
import { PRODUCTS, INDUSTRIES } from './src/constants';
import { ALL_CATEGORIES } from './src/data/seoData';
import { TECHNICAL_BLOGS } from './src/data/blogData';

const BASE_URL = 'https://tapeindia.shop';

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <!-- Main Pages -->',
    `  <url><loc>${BASE_URL}/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${BASE_URL}/about</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>`,
    `  <url><loc>${BASE_URL}/products</loc><priority>0.9</priority><changefreq>daily</changefreq></url>`,
    `  <url><loc>${BASE_URL}/industries</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>`,
    `  <url><loc>${BASE_URL}/blog</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${BASE_URL}/contact</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>`,
    `  <url><loc>${BASE_URL}/request-quote</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>`,
    '  <!-- Blog Posts -->',
    ...TECHNICAL_BLOGS.map(blog => `  <url><loc>${BASE_URL}/blog/${blog.id}</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>`),
    '  <!-- Products -->',
    ...PRODUCTS.map(product => `  <url><loc>${BASE_URL}/product/${product.id.toLowerCase().replace(/[^a-z0-9-]+/g, '')}</loc><priority>0.8</priority></url>`),
    '  <!-- Industries -->',
    ...INDUSTRIES.map(industry => `  <url><loc>${BASE_URL}/industry/${industry.id}</loc><priority>0.8</priority></url>`),
    '  <!-- Categories -->',
    ...ALL_CATEGORIES.map(category => `  <url><loc>${BASE_URL}/category/${category.id}</loc><priority>0.8</priority></url>`),
    '</urlset>'
].join('\n');

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap built.');
