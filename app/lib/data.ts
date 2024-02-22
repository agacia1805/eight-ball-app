import { sql } from '@vercel/postgres';
import { RandomizedWord, RandomizedProphecy } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRandomizedWord() {
  noStore();

  try {
    const data = await sql<RandomizedWord>
     `SELECT * FROM randomizedWords`;
     return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch randomized word data.');
  }
}

export async function fetchRandomizedProphecy() {
  noStore();

  try {
    const data = await sql<RandomizedProphecy>
    `SELECT * FROM randomizedProphecies`;
     return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch randomized prophecies data.');
  }
}
