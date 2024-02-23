"use client";

import { motion, useAnimation } from 'framer-motion';

export default function Ball() {
  return (
    <div className="container">
          <motion.div
            className="sphere"
            drag
            dragConstraints={{ left: -100, right: 100 }}
             whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              ease: 'linear',
            }}
          />
        </div>
  );
};
