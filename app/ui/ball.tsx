'use client';

import { motion } from 'framer-motion';

export default function Ball() {
  return (
    <div className='container'>
      <motion.div
        className='sphere flex items-center justify-center'
        drag
        dragConstraints={{ left: -100, right: 100 }}
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
      >
        <span>Text</span>
      </motion.div>
    </div>
  );
}
