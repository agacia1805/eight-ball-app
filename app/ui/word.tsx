import { fetchRandomizedWord } from '@/app/lib/data';
import { getRandomElement } from '@/app/lib/utils';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export default async function Word() {
  const words = await fetchRandomizedWord();
  const randomWord = getRandomElement(words);

  if (!randomWord) return null;

  return (
    <div className='flex flex-col gap-2 text-gray-50 md:max-w-2xl'>
      <p className='text-center'>
        <span
          className={`${robotoSlab.className} semibold text-4xl capitalize`}
        >
          {randomWord.word}
        </span>{' '}
        <span className='text-sm italic'>({randomWord.language})</span>
      </p>
      <p className='text-center text-xl italic'>- {randomWord.description}</p>
    </div>
  );
}
