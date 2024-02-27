import { fetchRandomizedWord } from '@/app/lib/data';
import { getRandomElement } from '@/app/lib/utils';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ weight: ['400', '700'],subsets: ['latin'] });

export default async function Word() {
  const words = await fetchRandomizedWord();
  const randomWord = getRandomElement(words);

  if (!randomWord) return null;

  return (
    <div className='flex flex-col gap-2 text-gray-50 items-center'>
      <p className='text-center'>
        <span
          className={`${rajdhani.className} text-white text-center font-bold text-3xl md:text-6xl capitalize`}
        >
          {randomWord.word}
        </span>{' '}
        <span className='text-base hidden md:inline-block italic'>({randomWord.language})</span>
      </p>
      <p className='text-center text-sm md:text-xl w-10/12 md:w-8/12 text-gray-200'>{randomWord.description}</p>
    </div>
  );
}
