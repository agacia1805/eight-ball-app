import Ball from '@/app/ui/ball';
import Word from '@/app/ui/word';

export default function Page() {
  return (
    <main className='mx-auto my-0 p-4'>
      <Ball className='ball-v1'>
        <Word />
      </Ball>
    </main>
  );
}
