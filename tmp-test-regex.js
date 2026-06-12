const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
(async () => {
  try {
    const env = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const uri = env.match(/MONGODB_URI=(.*)/)[1].trim();
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('bitlinks');
    const col = db.collection('url');
    const alias = 'youtube';
    const regex = new RegExp(`^${alias.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}$`, 'i');
    const result = await col.findOne({ shorturl: regex });
    console.log('regex result:', result);
    await client.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
