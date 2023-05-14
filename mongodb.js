const { MongoClient } = require('mongodb');

async function makeConnection() {
  const url =
    'mongodb+srv://sample:sample123@cluster0.x9yzawi.mongodb.net/?retryWrites=true&w=majority';

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the MongoDB database');
    return client;
  } catch (error) {
    console.error('Error connecting to the MongoDB database', error);
    throw error;
  }
}
module.exports = makeConnection
