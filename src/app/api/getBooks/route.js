import { NextResponse } from 'next/server';
// import { MongoClient } from 'mongodb';
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const uri = process.env.MONGODB_URI;

export async function GET(req, res) {
    const client = new MongoClient("mongodb+srv://dyk010518:Dyk0824!@books.fbsxfl1.mongodb.net/?retryWrites=true&w=majority");

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
