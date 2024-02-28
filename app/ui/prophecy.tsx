'use client';

import { getRandomElement } from '@/app/lib/utils';
import { RandomizedProphecy } from '@/app/lib/definitions';
import { Rajdhani } from 'next/font/google';
import { useMemo } from 'react';

const rajdhani = Rajdhani({ weight: ['400', '700'], subsets: ['latin'] });

export default function Prophecy({
  prophecies,
  isBallClicked,
  ballClickCount,
}: {
  prophecies: RandomizedProphecy[];
  isBallClicked?: boolean;
  ballClickCount?: number;
}) {
  const randomProphecy = useMemo(() => {
    if (isBallClicked) return getRandomElement(prophecies);
  }, [ballClickCount, isBallClicked]);

  if (!randomProphecy) return null;

  return (
    <div className='flex w-10/12 flex-col items-center gap-2 text-white'>
      <p
        className={`${rajdhani.className} text-center text-3xl font-bold capitalize md:text-6xl`}
      >
        {randomProphecy.title}
      </p>
      <p className='w-10/12 text-center text-base md:w-8/12 md:text-xl'>
        {randomProphecy.content}
      </p>
    </div>
  );
}
