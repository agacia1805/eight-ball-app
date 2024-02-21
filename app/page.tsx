import { fetchRandomizedProphecy } from '@/app/lib/data';

export default async function Home() {
const prophecies = await fetchRandomizedProphecy();
  return <main>{prophecies.map((prophecy) => <div>{prophecy.content}</div>)}</main>;
}
