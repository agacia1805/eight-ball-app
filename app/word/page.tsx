export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return <main className='mx-auto my-0 p-4'>Word page</main>;
}
