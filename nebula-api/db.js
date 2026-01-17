const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/nebula-ecommerce';
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
    if (db) return db;
    try {
        await client.connect();
        db = client.db();
        console.log('MongoDB Connected Successfully');
        return db;
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw error;
    }
};

const getDB = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectDB first.');
    }
    return db;
};

module.exports = { connectDB, getDB };
