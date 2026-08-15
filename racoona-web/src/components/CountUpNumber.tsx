import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export const CountUpNumber: React.FC<Props> = ({ 
  value, 
  suffix = '', 
  decimals = 0, 
  duration = 2 
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  // amount: 0.5 ensures half the element is visible before triggering
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(decimals) + suffix;
          }
        }
      });
    }
  }, [isInView, value, duration, decimals, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
};
