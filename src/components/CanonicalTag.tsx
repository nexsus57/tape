import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalTagProps {
    stripQuery?: boolean;
}

const CanonicalTag = ({ stripQuery = false }: CanonicalTagProps) => {
  // Use DynamicSEOTags instead at the app level.
  return null;
};

export default CanonicalTag;
