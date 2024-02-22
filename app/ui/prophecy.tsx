import { fetchRandomizedProphecy } from '@/app/lib/data';
import { getRandomElement } from '@/app/lib/utils';

export default async function Prophecy() {
  const prophecies = await fetchRandomizedProphecy();
  const randomProphecy = getRandomElement(prophecies);

  if (!randomProphecy) return null;

  return (
    <div className='text-gray-50'>
      <p className='semibold text-3xl capitalize'>{randomProphecy.title}</p>
      <p className='text-xl'>{randomProphecy.content}</p>
    </div>
  );
}
