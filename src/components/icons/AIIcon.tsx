
import type { SVGProps } from 'react';

export const AIIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.5" />
    <path d="M12 6v12M6 12h12" strokeOpacity="0" /> 
    {/* Sparkle shape */}
    <path d="M9.5 9.5L12 4l2.5 5.5L20 12l-5.5 2.5L12 20l-2.5-5.5L4 12l5.5-2.5z" fill="currentColor" stroke="none" />
  </svg>
);
