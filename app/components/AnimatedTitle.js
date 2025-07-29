"use client";

import { motion } from 'framer-motion';

export default function AnimatedTitle() {
  const title = ["Kanakina", "Design", "Studio"];

  return (
    <h1 className="fw-bold animated-title" style={{ color: '#FFFFFF', lineHeight: '1.2' }}>
      {title.map((word, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: lineIndex * 0.5 + Math.random() * 0.5,
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}
