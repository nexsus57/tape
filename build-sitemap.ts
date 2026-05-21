import fs from 'fs';
import path from 'path';
import { PRODUCTS, INDUSTRIES } from './src/constants';
import { ALL_CATEGORIES, ALL_BLOG_ARTICLES } from './src/data/seoData';
import { TECHNICAL_BLOGS } from './src/data/blogData';

const BASE_URL = 'https://tapeindia.shop';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

// 1. Gather all URLs with their properties to avoid any duplicates and enforce canonical alignment
interface SitemapUrl {
    loc: string;
    lastmod: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
}

const sitemapUrlsMap = new Map<string, SitemapUrl>();

function addSitemapUrl(loc: string, lastmod: string, changefreq: SitemapUrl['changefreq'], priority: number) {
    // Force HTTPS
    let cleanLoc = loc.trim().replace(/^http:/, 'https:');
    
    // Normalize trailing slashes consistently: only domain home "/" should have a trailing slash,
    // all inner pages are clean paths without a trailing slash.
    if (cleanLoc.endsWith('/') && cleanLoc !== `${BASE_URL}/`) {
        cleanLoc = cleanLoc.slice(0, -1);
    }

    // Never index dev, staging, or admin URLs
    if (cleanLoc.includes('/admin') || cleanLoc.includes('localhost') || cleanLoc.includes('127.0.0.1')) {
        return;
    }

    sitemapUrlsMap.set(cleanLoc, {
        loc: cleanLoc,
        lastmod,
        changefreq,
        priority
    });
}

// Add Main static indexable pages (Exact match to canonical)
addSitemapUrl(`${BASE_URL}/`, CURRENT_DATE, 'weekly', 1.0);
addSitemapUrl(`${BASE_URL}/about`, CURRENT_DATE, 'monthly', 0.8);
addSitemapUrl(`${BASE_URL}/products`, CURRENT_DATE, 'daily', 0.9);
addSitemapUrl(`${BASE_URL}/industries`, CURRENT_DATE, 'monthly', 0.8);
addSitemapUrl(`${BASE_URL}/blog`, CURRENT_DATE, 'weekly', 0.8);
addSitemapUrl(`${BASE_URL}/contact`, CURRENT_DATE, 'monthly', 0.8);
addSitemapUrl(`${BASE_URL}/request-quote`, CURRENT_DATE, 'monthly', 0.8);
addSitemapUrl(`${BASE_URL}/privacy-policy`, CURRENT_DATE, 'yearly', 0.3);

// Add Blog Posts (Merge ALL_BLOG_ARTICLES and TECHNICAL_BLOGS cleanly & securely)
const allArticles = [...ALL_BLOG_ARTICLES, ...TECHNICAL_BLOGS];
allArticles.forEach(blog => {
    if (blog && blog.id) {
        const cleanSlug = blog.id.trim().toLowerCase();
        const lastmod = blog.dateModified || blog.datePublished || CURRENT_DATE;
        addSitemapUrl(`${BASE_URL}/blog/${cleanSlug}`, lastmod, 'monthly', 0.7);
    }
});

// Add Products (Authoritative Product URLs generated with consistent format)
PRODUCTS.forEach(product => {
    if (product && product.id) {
        const cleanProductId = product.id.trim().toLowerCase().replace(/[^a-z0-9-]+/g, '');
        // Priority high for our product indexing since they are core landing nodes
        addSitemapUrl(`${BASE_URL}/product/${cleanProductId}`, CURRENT_DATE, 'weekly', 0.9);
    }
});

// Add Clean Category-page paths (Direct canonical URLs)
ALL_CATEGORIES.forEach(category => {
    if (category && category.id) {
        const cleanCategoryId = category.id.trim().toLowerCase();
        addSitemapUrl(`${BASE_URL}/category/${cleanCategoryId}`, CURRENT_DATE, 'monthly', 0.8);
    }
});

// Add Clean Industry-page paths (Direct canonical URLs)
INDUSTRIES.forEach(industry => {
    if (industry && industry.id) {
        const cleanIndustryId = industry.id.trim().toLowerCase();
        addSitemapUrl(`${BASE_URL}/industry/${cleanIndustryId}`, CURRENT_DATE, 'monthly', 0.8);
    }
});

// Add Tags (Gather unique, active product tags dynamically)
const uniqueTags = new Set<string>();
PRODUCTS.forEach(product => {
    if (product && product.tags) {
        product.tags.forEach(tag => {
            const normalized = tag.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]+/g, '');
            if (normalized) {
                uniqueTags.add(normalized);
            }
        });
    }
});
Array.from(uniqueTags).sort().forEach(tagSlug => {
    addSitemapUrl(`${BASE_URL}/tag/${tagSlug}`, CURRENT_DATE, 'monthly', 0.6);
});

// Map entries to sitemap.xml format
const sitemapEntries = Array.from(sitemapUrlsMap.values()).map(entry => {
    return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
});

const sitemapContent = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapEntries.join('\n'),
    '</urlset>'
].join('\n');

// Write to public folder
fs.writeFileSync('public/sitemap.xml', sitemapContent);
console.log(`Sitemap successfully written to public/sitemap.xml with ${sitemapUrlsMap.size} pages.`);

// Keep dist folder in sync as a failsafe
try {
    if (fs.existsSync('dist')) {
        fs.writeFileSync('dist/sitemap.xml', sitemapContent);
        console.log('Sitemap successfully copied to dist/sitemap.xml');
    }
} catch (err) {
    // Failsafe if building right now
}
