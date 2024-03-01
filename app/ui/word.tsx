'use client';

import { getRandomElement } from '@/app/lib/utils';
import { RandomizedWord } from '@/app/lib/definitions';
import { Rajdhani } from 'next/font/google';
import { useMemo } from 'react';

const rajdhani = Rajdhani({ weight: ['400', '700'], subsets: ['latin'] });

export default function Word({
  words,
  isBallClicked,
  ballClickCount,
  isShaking,
}: {
  words: RandomizedWord[];
  isBallClicked?: boolean;
  ballClickCount?: number;
  isShaking?: boolean;
}) {
  const randomWord = useMemo(() => {
    if (isBallClicked && !isShaking) return getRandomElement(words);
  }, [ballClickCount, isBallClicked, isShaking]);

  if (!randomWord) return null;

  return (
    <div className='flex flex-col items-center gap-2 text-gray-50'>
      <p className='text-center'>
        <span
          className={`${rajdhani.className} text-center text-3xl font-bold capitalize text-white md:text-6xl`}
        >
          {randomWord.word}
        </span>{' '}
        <span className='hidden text-base italic md:inline-block'>
          ({randomWord.language})
        </span>
      </p>
      <p className='w-10/12 text-center text-sm text-gray-200 md:w-8/12 md:text-xl'>
        {randomWord.description}
      </p>
    </div>
  );
}
