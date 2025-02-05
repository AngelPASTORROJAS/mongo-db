const { MongoClient, ObjectId } = require('mongodb');

// Configuration
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'users';

// Connexion à MongoDB
async function connectToMongo() {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  return client.db(dbName);
}

// Opérations CRUD
const operations = {
  // CREATE - POST
  async create(userData) {
    const db = await connectToMongo();
    try {
      const result = await db.collection(collectionName).insertOne(userData);
      return result.insertedId;
    } finally {
      await db.client.close();
    }
  },

  // READ - GET
  async read(id) {
    const db = await connectToMongo();
    try {
      if (id) {
        return await db.collection(collectionName).findOne({ _id: id });
      } else {
        return await db.collection(collectionName).find({}).toArray();
      }
    } finally {
      await db.client.close();
    }
  },

  // UPDATE - PUT
  async update(id, updateData) {
    const db = await connectToMongo();
    try {
      const result = await db.collection(collectionName).updateOne(
        { _id: id },
        { $set: updateData }
      );
      return result.modifiedCount;
    } finally {
      await db.client.close();
    }
  },

  // DELETE - DELETE
  async delete(id) {
    const db = await connectToMongo();
    try {
      const result = await db.collection(collectionName).deleteOne({ _id: id });
      return result.deletedCount;
    } finally {
      await db.client.close();
    }
  }
};

// Exemple d'utilisation
async function main() {
  try {
    // CREATE
    const newId = await operations.create({ name: 'John Doe', email: 'john@example.com' });
    console.log('Created user with ID:', newId);

    // READ
    const user = await operations.read(newId);
    console.log('Read user:', user);

    // UPDATE
    const updateCount = await operations.update(newId, { name: 'Jane Doe' });
    console.log('Updated users:', updateCount);

    // READ ALL
    const allUsers = await operations.read();
    console.log('All users:', allUsers);

    // DELETE
    const deleteCount = await operations.delete(newId);
    console.log('Deleted users:', deleteCount);

  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);
