import Fuse from 'fuse.js';
import { PRODUCTS, INDUSTRIES } from '../../constants';
import { ALL_CATEGORIES } from '../../data/seoData';

export interface SearchResult {
  id: string;
  name: string;
  type: 'product' | 'category' | 'industry';
  url: string;
  image?: string;
}

// Simple Synonym AI Map
const SYNONYM_MAP: Record<string, string[]> = {
  'sticky tape': ['packaging tapes', 'cello tape', 'bopp tape'],
  'cello tape': ['bopp tape', 'clear tape', 'packaging'],
  'two sided': ['double sided', 'vhb', 'mounting'],
  'heat resistant': ['kapton', 'teflon', 'high temperature'],
  'electric': ['electrical', 'insulation', 'pvc tape'],
  'warning': ['safety', 'hazard', 'barricade'],
  'glow in dark': ['photoluminescent', 'safety'],
};

// Flatten data for search
const searchData: SearchResult[] = [
  ...PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    type: 'product' as const,
    url: `/product/${p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '')}`,
    image: p.image,
    description: p.description
  })),
  ...ALL_CATEGORIES.map(c => ({
    id: c.id,
    name: c.name,
    type: 'category' as const,
    url: `/category/${c.id}`,
    image: c.image,
    description: c.description
  })),
  ...INDUSTRIES.map(i => ({
    id: i.id,
    name: i.name,
    type: 'industry' as const,
    url: `/industry/${i.id}`,
    description: i.subtitle
  }))
];

const fuseOptions = {
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  keys: [
    { name: 'name', weight: 0.7 },
    { name: 'description', weight: 0.3 }
  ]
};

const fuse = new Fuse(searchData, fuseOptions);

export const performSearch = (query: string): SearchResult[] => {
  if (!query) return [];

  // Synonym check
  const lowerQuery = query.toLowerCase();
  let expandedQueries = [lowerQuery];
  
  for (const [key, synonyms] of Object.entries(SYNONYM_MAP)) {
    if (lowerQuery.includes(key)) {
      expandedQueries = [...expandedQueries, ...synonyms];
    }
  }

  // Combine results
  const resultsMap = new Map<string, SearchResult>();

  expandedQueries.forEach(q => {
    const results = fuse.search(q);
    results.forEach(res => {
      if (!resultsMap.has(res.item.id)) {
        resultsMap.set(res.item.id, res.item);
      }
    });
  });

  return Array.from(resultsMap.values()).slice(0, 8); // Top 8 results
};
