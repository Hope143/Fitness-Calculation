import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbUser:PctkxJtdGuHVMqHB@cluster0.iju5dvs.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("articles");
  await db.collection(collection).insertOne(document);
}

export async function getAllDocument(client, collection, sort) {
  const db = client.db("articles");

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
