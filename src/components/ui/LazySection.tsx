'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySection {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const LazySection: React.FC<LazySection> = ({
  children,
  fallback,
  rootMargin = '50px',
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Disconnect observer after loading to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, hasLoaded]);

  const defaultFallback = (
    <div className="py-16 flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {isVisible || hasLoaded ? children : (fallback || defaultFallback)}
    </div>
  );
};

export default LazySection;