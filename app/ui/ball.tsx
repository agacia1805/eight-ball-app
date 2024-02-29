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
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const shake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 700);
  };

  const handleBallClick = () => {
    setIsBallClicked(true);
    setBallClickCount((prevCount) => prevCount + 1);
    shake();
  };

  const childArray = React.Children.toArray(children);

 const earthquakeVariants = {
    shaking: {
      x: [-25, 25, -25, 25, 0],
      y: [45, -45, 45, -45, 0],
      transition: {
                          duration: 0.7,
                          ease: [0, 0.71, 0.2, 1.01],
                          scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                          }
                        },
    },
  };

  return (
    <div className='container'>
      <motion.div
        className={`${className} ball flex cursor-pointer select-none items-center justify-center`}
        onClick={() => {
          if (!isShaking) handleBallClick();
        }}
             animate={isShaking ? "shaking" : ""}
                     variants={earthquakeVariants}
      >
        {React.Children.map(childArray, (child: ReactNode) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement, {
              isBallClicked,
              ballClickCount,
              isShaking
            });
          }
          return child;
        })}
      </motion.div>
    </div>
  );
}
