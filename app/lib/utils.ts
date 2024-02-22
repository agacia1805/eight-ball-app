import { RandomizedWord, RandomizedProphecy } from './definitions';

export const getRandomElement = <T extends RandomizedWord | RandomizedProphecy>(
  array: T[]
): T | null => {
  if (array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
