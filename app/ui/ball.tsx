'use client';

import { motion } from 'framer-motion';
import React, { ReactNode, ReactElement, useState } from 'react';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ weight: ['400', '700'], subsets: ['latin'] });

export default function Ball({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [isBallClicked, setIsBallClicked] = useState<boolean>(false);
  const [ballClickCount, setBallClickCount] = useState<number>(0);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const shake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 800);
  };

  const handleBallClick = () => {
    setIsBallClicked(true);
    setBallClickCount((prevCount) => prevCount + 1);
    shake();
  };

  const childArray = React.Children.toArray(children);

  const earthquakeVariants = {
    shaking: {
      x: [-45, 45, 0, 45, 0],
      y: [45, -45, 0, -45, 0],
      transition: {
        duration: 0.8,
        scale: {
          type: 'spring',
          damping: 1,
          stiffness: 0,
          restDelta: 0.001,
        },
      },
    },
    initial: {
      x: 0,
      y: 0,
    },
  };

  return (
    <div className='container'>
      <motion.div
        className={`${className} ball flex cursor-pointer select-none items-center justify-center`}
        onClick={() => {
          if (!isShaking) handleBallClick();
        }}
        animate={isShaking ? 'shaking' : 'initial'}
        variants={earthquakeVariants}
      >
      {!isBallClicked && <span className={`${rajdhani.className} text-center text-white text-3xl font-semibold md:text-5xl`}>Click to shake</span>}
        {React.Children.map(childArray, (child: ReactNode) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement, {
              isBallClicked,
              ballClickCount,
              isShaking,
            });
          }
          return child;
        })}
      </motion.div>
    </div>
  );
}
