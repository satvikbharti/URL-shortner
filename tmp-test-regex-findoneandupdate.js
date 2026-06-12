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
    const alias = 'Youtube';
    const regex = new RegExp(`^${alias.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}$`, 'i');
    const result = await col.findOneAndUpdate({ shorturl: regex }, { $inc: { clicks: 1 } }, { returnDocument: 'after' });
    console.log('result type:', typeof result);
    console.log('result keys:', Object.keys(result || {}));
    console.log('result.value:', result?.value);
    console.log('result itself:', result);
    await client.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
