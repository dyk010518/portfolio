import { NextResponse } from 'next/server';
// import { MongoClient } from 'mongodb';
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const uri = process.env.MONGODB_URI;
const uri_2 = `mongodb+srv://dyk010518:${process.env.MONGODB_PASSWORD}@books.fbsxfl1.mongodb.net/?retryWrites=true&w=majority`

export async function GET(req, res) {
    const client = new MongoClient(uri);

    await client.connect();
    console.log('Connected successfully to server : update, find or insertData');
    const database = client.db("Books");
    const collection = database.collection('read_books');

    try {
        const books = await collection.find({}).toArray();
        return NextResponse.json(JSON.stringify(books))
    } catch (err) {
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }

}
