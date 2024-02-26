import Link from 'next/link';

export default function Home() {
  return (
    <main className='mx-auto my-0 flex flex-col gap-16 p-4 md:gap-24'>
      <div className='ball static-ball flex items-center justify-center'>
        <span>Choose mode and shake the ball</span>
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
