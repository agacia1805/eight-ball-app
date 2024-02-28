import Link from 'next/link';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className='mx-auto my-0 flex flex-col gap-16 pt-36 md:gap-24'>
      <div className='ball static-ball flex flex-col items-center justify-center gap-1 text-black md:gap-2'>
        <span
          className={`${rajdhani.className} text-center text-2xl font-semibold md:text-3xl`}
        >
          Choose mode.
        </span>
        <span
          className={`${rajdhani.className} text-center text-3xl font-bold md:text-5xl`}
        >
          Shake the ball.
        </span>
      </div>
      <div className='flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16'>
        <Link
          href='/word'
          className='text-md flex h-[48px] w-48 items-center justify-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:text-yellow-800 md:p-2 md:px-3'
        >
          Word mode
        </Link>
        <Link
          href='/prophecy'
          className='text-md flex h-[48px] w-48 items-center justify-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:text-yellow-800 md:p-2 md:px-3'
        >
          Prophecy mode
        </Link>
      </div>
    </main>
  );
}
