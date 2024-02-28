'use client';

import { motion } from 'framer-motion';
import React, { ReactNode, ReactElement, useState } from 'react';

export default function Ball({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [isBallClicked, setIsBallClicked] = useState<boolean>(false);
  const [ballClickCount, setBallClickCount] = useState<number>(0);

  const handleBallClick = () => {
    setIsBallClicked(true);
    setBallClickCount((prevCount) => prevCount + 1);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div className='container'>
      <motion.div
        className={`${className} ball flex cursor-pointer select-none items-center justify-center`}
        onClick={handleBallClick}
      >
        {React.Children.map(childArray, (child: ReactNode) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement, {
              isBallClicked,
              ballClickCount,
            });
          }
          return child;
        })}
      </motion.div>
    </div>
  );
}
