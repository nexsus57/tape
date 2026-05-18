import { Product, Category, BlogArticle } from '../types';

export const generateBreadcrumbsSchema = (
  path: string, 
  search: string,
  products: Product[],
  categories: Category[],
  articles: BlogArticle[],
  seoMatchPageName?: string
) => {
  const items = [
      {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tapeindia.shop/"
      }
  ];

  let i = 2;
  if (path.startsWith('/product/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      const productId = path.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
      const p = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
      if (p) {
          const cat = categories.find(c => c.id === p.category);
          if (cat) {
              items.push({
                  "@type": "ListItem",
                  "position": i++,
                  "name": cat.name,
                  "item": `https://tapeindia.shop/category/${cat.id}`
              });
          }
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": p.name,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path.startsWith('/category/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      const catId = path.replace('/category/', '');
      const cat = categories.find(c => c.id === catId);
      if (cat) {
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": cat.name,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path.startsWith('/industry/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Industries",
          "item": "https://tapeindia.shop/industries"
      });
      const indId = path.replace('/industry/', '');
      const indName = indId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      items.push({
          "@type": "ListItem",
          "position": i,
          "name": indName,
          "item": `https://tapeindia.shop${path}`
      });
  } else if (path.startsWith('/products')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      if (search.includes('category=')) {
          const catId = new URLSearchParams(search).get('category');
          const cat = categories.find(c => c.id === catId);
          if (cat) {
              items.push({
                  "@type": "ListItem",
                  "position": i,
                  "name": cat.name,
                  "item": `https://tapeindia.shop${path}${search}`
              });
          }
      }
  } else if (path.startsWith('/blog/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Blog",
          "item": "https://tapeindia.shop/blog"
      });
      const articleId = path.replace('/blog/', '');
      const article = articles.find(a => a.id === articleId);
      if(article) {
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": article.title,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path !== '/' && seoMatchPageName) {
      items.push({
          "@type": "ListItem",
          "position": i,
          "name": seoMatchPageName,
          "item": `https://tapeindia.shop${path}`
      });
  }

  if (items.length > 1) {
      return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items
      };
  }
  return null;
};

export const generateWebsiteSchema = (path: string) => {
    return path === '/' ? {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://tapeindia.shop/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tapeindia.shop/search/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    } : null;
}
