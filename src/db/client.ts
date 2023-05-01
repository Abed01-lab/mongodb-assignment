import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()
const dbName = 'test';

export async function connectToDB(): Promise<Db> {
	const client = await MongoClient.connect(process.env.MONGO_URI as string);
	const db = client.db(dbName);

	return db;
}
