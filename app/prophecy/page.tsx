import Ball from '@/app/ui/ball';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return <main className='mx-auto my-0 p-4'><Ball>Test</Ball></main>;
}
