'use client';

import { TbError404 } from "react-icons/tb";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
    <TbError404 size={120} className="text-white"/>
      <h2 className='text-center text-2xl text-white'>Something went wrong!</h2>
      <button
        className='mt-8 rounded-md bg-gray-300 px-8 py-2 text-base text-black transition-colors hover:text-yellow-800'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
