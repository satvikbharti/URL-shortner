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
    const result = await col.findOneAndUpdate({ shorturl: alias }, { $inc: { clicks: 1 } }, { returnDocument: 'after', upsert: false });
    console.log('result', result);
    console.log('value', result.value);
    await client.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
