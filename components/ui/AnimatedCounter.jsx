'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter - Counts up from 0 to target value when visible
 * @param {number|string} value - Target value (can include suffix like "10+" or "500+")
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @param {string} className - Additional CSS classes
 */
export default function AnimatedCounter({ 
  value, 
  duration = 2000, 
  className = '' 
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Extract numeric value and suffix (e.g., "10+" -> 10, "+")
  const stringValue = String(value);
  const numericMatch = stringValue.match(/^([\d.]+)/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = stringValue.replace(/^[\d.]+/, ''); // Everything after the number

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = performance.now();
    const isDecimal = targetNumber % 1 !== 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = targetNumber * easeOutQuart;

      if (isDecimal) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  };

  // Format number with K/M suffix if needed
  const formatNumber = (num) => {
    if (stringValue.includes('K')) {
      return num.toFixed(1).replace(/\.0$/, '') + 'K';
    }
    if (stringValue.includes('M')) {
      return num.toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return num;
  };

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? formatNumber(count) : '0'}
      {suffix && !stringValue.includes('K') && !stringValue.includes('M') ? suffix : 
        (hasAnimated && (stringValue.includes('K') || stringValue.includes('M')) ? suffix.replace(/[KM]/, '') : '')}
    </span>
  );
}
