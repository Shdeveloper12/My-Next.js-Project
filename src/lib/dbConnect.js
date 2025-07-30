import { MongoClient, ServerApiVersion }  from 'mongodb';

function dbConnect(collectionName) {
  const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
    return client.db(process.env.DB_NAME).collection(collectionName);
}
export default dbConnect;