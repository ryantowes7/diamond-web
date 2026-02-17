import clientPromise from './mongodb';

const DB_NAME = 'diamond_group';

export async function getDatabase() {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

export async function getCollection(collectionName) {
  const db = await getDatabase();
  return db.collection(collectionName);
}

// Collections
export const COLLECTIONS = {
  ADMIN_USERS: 'admin_users',
  COMPANY: 'company',
  HERO: 'hero',
  HOUSE_TYPES: 'house_types',
  HOUSING_PROJECTS: 'housing_projects',
  CONTACT: 'contact',
};

// Helper functions for CRUD operations
export async function findOne(collectionName, query = {}) {
  const collection = await getCollection(collectionName);
  return await collection.findOne(query);
}

export async function findMany(collectionName, query = {}, options = {}) {
  const collection = await getCollection(collectionName);
  return await collection.find(query, options).toArray();
}

export async function insertOne(collectionName, document) {
  const collection = await getCollection(collectionName);
  const result = await collection.insertOne(document);
  return { ...document, _id: result.insertedId };
}

export async function updateOne(collectionName, query, update) {
  const collection = await getCollection(collectionName);
  return await collection.updateOne(query, { $set: update });
}

export async function deleteOne(collectionName, query) {
  const collection = await getCollection(collectionName);
  return await collection.deleteOne(query);
}

export async function replaceOne(collectionName, query, document) {
  const collection = await getCollection(collectionName);
  return await collection.replaceOne(query, document, { upsert: true });
}