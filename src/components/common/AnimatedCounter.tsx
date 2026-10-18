'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './AnimatedCounter.css';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const STRIP = [...DIGITS, ...DIGITS];
const SLOT = 100 / STRIP.length;

const formatValue = (value: number, decimals: number) => {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }

  return Math.round(value).toLocaleString('en-IN');
};

const DigitColumn: React.FC<{
  digit: number;
  delay: number;
  duration: number;
  active: boolean;
}> = ({ digit, delay, duration, active }) => {
  const targetIndex = 10 + digit;

  return (
    <span className="rolling-digit">
      <motion.span
        className="rolling-digit__strip"
        initial={{ y: '0%' }}
        animate={{ y: active ? `${-targetIndex * SLOT}%` : '0%' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {STRIP.map((n, index) => (
          <span className="rolling-digit__num" key={`${n}-${index}`}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 4,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const formatted = useMemo(() => formatValue(end, decimals), [end, decimals]);
  const characters = useMemo(() => formatted.split(''), [formatted]);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (reduceMotion) {
    return (
      <span ref={ref} className={['rolling-counter', className].filter(Boolean).join(' ')}>
        {prefix}
        {formatted}
        {suffix}
      </span>
    );
  }

  let digitIndex = 0;

  return (
    <span
      ref={ref}
      className={['rolling-counter', className].filter(Boolean).join(' ')}
      aria-label={`${prefix}${formatted}${suffix}`}
    >
      {prefix ? <span className="rolling-counter__prefix">{prefix}</span> : null}

      {characters.map((char, index) => {
        if (!/\d/.test(char)) {
          return (
            <span className="rolling-counter__symbol" key={`s-${index}`}>
              {char}
            </span>
          );
        }

        const columnDelay = delay + digitIndex * 0.08;
        const column = (
          <DigitColumn
            key={`d-${index}`}
            digit={Number(char)}
            delay={columnDelay}
            duration={duration}
            active={isInView}
          />
        );
        digitIndex += 1;
        return column;
      })}

      {suffix ? <span className="rolling-counter__suffix">{suffix}</span> : null}
    </span>
  );
};
