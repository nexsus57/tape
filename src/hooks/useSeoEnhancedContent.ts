import { useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useIndustry } from '../context/IndustryContext';

/**
 * An expert SEO automation hook for aggressive internal linking.
 * Takes any HTML or text content and automatically injects internal links
 * for products, categories, and industries.
 */
export const useSeoEnhancedContent = (content: string | undefined | null) => {
    const { products } = useProducts();
    const { categories } = useCategories();
    const { industries } = useIndustry();

    // Memoize the content processing to run only when the content or dictionaries change.
    const enhancedContent = useMemo(() => {
        if (!content) return '';

        let processedContent = content;

        // Build a combined map of entity names to their URL paths
        // Priority: 1. Products (most specific), 2. Categories, 3. Industries
        const linkMap = new Map<string, string>();

        // Add industries
        industries.forEach(i => {
            if (i.name) linkMap.set(i.name.toLowerCase().trim(), `/products?industry=${i.id}`);
        });

        // Add categories
        categories.forEach(c => {
            if (c.name) linkMap.set(c.name.toLowerCase().trim(), `/category/${c.id}`);
        });

        // Add products (highest priority, will overwrite if names collide, which is desired)
        products.forEach(p => {
            if (p.name) linkMap.set(p.name.toLowerCase().trim(), `/product/${p.id}`);
        });

        // Sort names by length, descending. This is crucial to match
        // longer names first (e.g., "Green Polyester Tape" before "Polyester Tape")
        // so we don't partially link a long name.
        const sortedNames = [...linkMap.keys()].sort((a, b) => b.length - a.length);

        // Splitting by HTML tags prevents us from injecting broken a-tags inside HTML attributes.
        const parts = processedContent.split(/(<[^>]+>)/g);

        const newParts = parts.map(part => {
            // Unchanged if it's already an HTML tag
            if (part.startsWith('<') && part.endsWith('>')) {
                return part;
            }

            let textPart = part;
            sortedNames.forEach(entityName => {
                // Ignore very short or common words to prevent massive overlinking
                if (entityName.length <= 3 || entityName === 'tape') return;

                const url = linkMap.get(entityName);
                if (!url) return;
                
                // Allow optional 's' or 'es' at the end of the word for plurals
                // Negative lookbehind & lookahead for <a> tags to avoid link nesting
                const regex = new RegExp(`(?<!<a[^>]*>.*?)\\b(${entityName}(?:s|es)?)\\b(?!.*?</a>)`, 'gi');
                
                textPart = textPart.replace(regex, (match) => {
                     // Check if it's inside an href or similar attribute which split might have missed (sanity check)
                     return `<a href="${url}" class="text-brand-accent hover:text-brand-500 hover:underline transition-colors font-medium border-b border-brand-accent/30 hover:border-brand-500" title="View details for ${entityName}">${match}</a>`;
                });
            });
            return textPart;
        });

        return newParts.join('');

    }, [content, products, categories, industries]);

    return { enhancedContent };
};
