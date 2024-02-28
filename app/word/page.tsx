import Ball from '@/app/ui/ball';
import Word from '@/app/ui/word';
import { fetchRandomizedWord } from '@/app/lib/data';

export default async function Page() {
  const words = await fetchRandomizedWord();

  return (
    <main className='mx-auto my-0 p-4'>
      <Ball className='ball-v1'>
        <Word words={words} />
      </Ball>
    </main>
  );
}
