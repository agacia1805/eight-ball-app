const { db } = require('@vercel/postgres');
const {
  randomizedWords,
  randomizedProphecies,
} = require('../app/lib/placeholder-data.js');

async function seedRandomizedWords(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "randomizedWords" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS randomizedWords (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            word VARCHAR(255) NOT NULL,
            language VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
            );
    `;

    console.log(`Created "randomizedWords" table`);

    // Insert data into the "invoices" table
    const insertedWords = await Promise.all(
      randomizedWords.map(
        (wordData) => client.sql`
            INSERT INTO randomizedWords (id, word, language, description)
            VALUES (${wordData.id}, ${wordData.word}, ${wordData.language}, ${wordData.description})
                ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedWords.length} words`);

    return {
      createTable,
      words: insertedWords,
    };
  } catch (error) {
    console.error('Error seeding words:', error);
    throw error;
  }
}

async function seedRandomizedProphecies(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "randomizedWords" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS randomizedWords (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL
            );
    `;

    console.log(`Created "randomizedProphecies" table`);

    // Insert data into the "invoices" table
    const insertedProphecies = await Promise.all(
      randomizedWords.map(
        (wordData) => client.sql`
            INSERT INTO insertedProphecies (id, title, content)
            VALUES (${wordData.id}, ${wordData.title}, ${wordData.content})
                ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedProphecies.length} words`);

    return {
      createTable,
      words: insertedProphecies,
    };
  } catch (error) {
    console.error('Error seeding prophecies:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRandomizedProphecies(client);
  await seedRandomizedWords(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
