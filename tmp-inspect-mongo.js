const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
(async () => {
  try {
    const env = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = env.match(/MONGODB_URI=(.*)/);
    if (!match) {
      console.error('MONGODB_URI not found');
      process.exit(1);
    }
    const uri = match[1].trim();
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('bitlinks');
    const docs = await db.collection('url').find({}).limit(50).toArray();
    console.log(JSON.stringify(docs, null, 2));
    await client.close();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
