import { fetchRandomizedProphecy } from '@/app/lib/data';
import { getRandomElement } from '@/app/lib/utils';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export default async function Prophecy() {
  const prophecies = await fetchRandomizedProphecy();
  const randomProphecy = getRandomElement(prophecies);

  if (!randomProphecy) return null;

  return (
    <div className='flex flex-col gap-2 text-gray-50 md:max-w-2xl'>
      <p
        className={`${robotoSlab.className} semibold text-center text-3xl capitalize`}
      >
        {randomProphecy.title}
      </p>
      <p className='text-center text-xl italic'>{randomProphecy.content}</p>
    </div>
  );
}
