'use client';

import { motion } from 'framer-motion';

export default function Ball({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className='container'>
      <motion.div
        className={`${className} ball flex items-center justify-center`}
        drag='x'
        dragConstraints={{ left: -100, right: 100 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
