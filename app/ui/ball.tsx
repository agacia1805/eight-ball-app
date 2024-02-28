'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Ball({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [isBallClicked, setIsBallClicked] = useState<boolean>(false);
  const [ballClickCount, setBallClickCount] = useState<number>(0);

  const handleBallClick = () => {
    setIsBallClicked(true);
    setBallClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='container'>
      <motion.div
        className={`${className} ball flex cursor-pointer select-none items-center justify-center`}
        onClick={handleBallClick}
      >
        {React.Children.map(children, (child: React.ReactElement) =>
          React.cloneElement(child, { isBallClicked, ballClickCount })
        )}
      </motion.div>
    </div>
  );
}
