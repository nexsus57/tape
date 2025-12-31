
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children?: ReactNode;
  className?: string;
  delay?: string;
}

export default function AnimatedSection({ children, className = '', delay = 'delay-0' }: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${delay} ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};