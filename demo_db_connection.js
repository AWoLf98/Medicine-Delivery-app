import { MongoClient, ServerApiVersion } from 'mongodb';
// var mysql = require('mysql');

const dbName = 'MedicineDeliveryDB';

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://delivery-user:delivery-user@cluster0.dgbxqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('MedicineDeliveryDB');
    const collection = database.collection('shops');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { Name: 'Ibuprofen' };
    // const movie = await movies.find({});
    // console.log(movie);


    const docs = await collection.find({}).toArray();
        
    console.log("Всі документи з колекції 'shops':");
    console.log(docs);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);