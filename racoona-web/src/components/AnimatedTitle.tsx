import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  pretitle?: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
}

export default function AnimatedTitle({ pretitle, title, gradientText, subtitle }: Props) {
  return (
    <div>
      {pretitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-cyan-400 font-sans text-xs tracking-widest uppercase mb-4 font-semibold"
        >
          {pretitle}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-6 font-sans leading-tight"
      >
        {title}{' '}
        {gradientText && (
          <>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {gradientText}
            </span>
          </>
        )}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-lg font-sans leading-relaxed mb-10 max-w-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
