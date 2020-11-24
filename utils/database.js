import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function Connect(){
    if(await client.isConnected()) await client.connect();

    const db = client.db('appsns');
    return { db, client };
}