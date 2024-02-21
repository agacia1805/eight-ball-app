import { fetchRandomizedProphecy } from '@/app/lib/data';

export default async function Home() {
const prophecies = await fetchRandomizedProphecy();
  return <main>{prophecies.map((prophecy) => <div key={prophecy.id}>{prophecy.content}</div>)}</main>;
}
