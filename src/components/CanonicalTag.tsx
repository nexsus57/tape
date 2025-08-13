import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalTagProps {
  stripQuery?: boolean;
  pathOverride?: string; // optional override, e.g. "/about"
}

const CanonicalTag = ({ stripQuery = false, pathOverride }: CanonicalTagProps) => {
  const location = useLocation();

  // Force the canonical domain to the live domain (do NOT use window.location.host)
  const BASE = 'https://tapeindia.shop';

  // Use explicit override when provided, otherwise derive from current location
  let path = pathOverride ?? location.pathname;

  if (!stripQuery && !pathOverride) {
    path += location.search;
  }

  // Normalize: empty or double-slash -> '/'
  if (!path || path === '//' ) path = '/';

  // Remove trailing slash for non-root paths
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);

  const canonicalUrl = `${BASE}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalTag;
