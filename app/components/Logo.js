'use client';

import { useState } from 'react';
import Link from 'next/link';

const Logo = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(true);
    // アニメーションが終わった後にクラスをリセットする
    setTimeout(() => {
      setIsRotated(false);
    }, 500); // CSSのtransitionの時間と合わせる
  };

  return (
    <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none" onClick={handleClick}>
      <span className={`logo-playfair logo-rotate ${isRotated ? 'active' : ''}`}>
        KDS
      </span>
    </Link>
  );
};

export default Logo;
