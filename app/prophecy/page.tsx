import Ball from '@/app/ui/ball';
import Prophecy from '@/app/ui/prophecy';
import { fetchRandomizedProphecy } from '@/app/lib/data';

export default async function Page() {
const prophecies = await fetchRandomizedProphecy();

  return (
    <main className='mx-auto my-0 p-4'>
      <Ball className='ball-v2'>
        <Prophecy prophecies={prophecies}/>
      </Ball>
    </main>
  );
}
