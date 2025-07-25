"use client";

import { useEffect } from 'react';

const SparkleEffect = () => {
  useEffect(() => {
    const createStar = (x, y) => {
      const star = document.createElement('div');
      star.className = 'star';
      const offsetX = (Math.random() - 0.5) * 50;
      const offsetY = (Math.random() - 0.5) * 50;
      star.style.left = `${x + offsetX}px`;
      star.style.top = `${y + offsetY}px`;
      star.style.animationDuration = `${0.7 + Math.random() * 0.6}s`;
      star.style.animationDelay = `${Math.random() * 0.2}s`;
      const endX = offsetX * 2;
      const endY = offsetY * 2 - 50;
      star.style.setProperty('--end-x', `${endX}px`);
      star.style.setProperty('--end-y', `${endY}px`);
      document.body.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 10; i++) {
        createStar(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible itself
};

export default SparkleEffect;
