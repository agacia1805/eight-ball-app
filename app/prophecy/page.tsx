import Ball from '@/app/ui/ball';
import Prophecy from '@/app/ui/prophecy';

export default function Page() {
  return (
    <main className='mx-auto my-0 p-4'>
      <Ball className='ball-v2'>
        <Prophecy />
      </Ball>
    </main>
  );
}
