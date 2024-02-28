import { getRandomElement } from '@/app/lib/utils';
import { RandomizedProphecy } from '@/app/lib/definitions';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ weight: ['400', '700'],subsets: ['latin'] });

export default function Prophecy({prophecies}: RandomizedProphecy[]) {
  const randomProphecy = getRandomElement(prophecies);

  if (!randomProphecy) return null;

  return (
    <div className='flex w-10/12 flex-col gap-2 items-center text-white'>
      <p
        className={`${rajdhani.className} text-center font-bold text-3xl md:text-6xl capitalize`}
      >
        {randomProphecy.title}
      </p>
      <p className='text-center text-base md:text-xl w-10/12 md:w-8/12'>{randomProphecy.content}</p>
    </div>
  );
}
