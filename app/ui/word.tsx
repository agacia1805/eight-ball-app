import { fetchRandomizedWord } from '@/app/lib/data';
import { getRandomElement } from '@/app/lib/utils';

export default async function Word() {
  const words = await fetchRandomizedWord();
  const randomWord = getRandomElement(words);

  if (!randomWord) return null;

  return (
    <div className='text-gray-50'>
      <p>
        <span className='semibold text-3xl capitalize'>{randomWord.word}</span>
        <span className='text-sm italic'>({randomWord.language})</span>
      </p>
      <p className='text-xl'>- {randomWord.description}</p>
    </div>
  );
}
