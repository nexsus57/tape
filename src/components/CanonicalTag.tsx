import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalTagProps {
    /**
     * If true, query parameters will be stripped from the canonical URL.
     * This is useful for product pages where query params are often for tracking.
     */
    stripQuery?: boolean;
}

const CanonicalTag = ({ stripQuery = false }: CanonicalTagProps) => {
  const location = useLocation();
  
  let path = location.pathname;
  if (!stripQuery) {
      path += location.search;
  }
  
  // Ensure homepage path is just "/"
  if (path === '//') {
      path = '/';
  }

  // Handle trailing slashes for paths other than the root
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const canonicalUrl = `https://tapeindia.shop${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalTag;
