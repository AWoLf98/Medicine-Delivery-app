import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import cors from 'cors';


const app = express();
const dbName = 'MedicineDeliveryDB';
const uri = "mongodb+srv://delivery-user:delivery-user@cluster0.dgbxqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Робимо доступним для всіх доменів
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Дозволяємо різні HTTP методи
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Дозволяємо деякі заголовки
    next();
  });

// app.use(cors());
  

app.get('/api/shops', (req, res) => {

    run().then(response => res.json(response)).catch(error => {
        console.log('Помилка під час отримання даних з бази даних:', error);
        res.status(500).json({ error: 'Помилка під час обробки запиту' });
    });
});
  
  // Прослуховування порту 3000
app.listen(3020, () => {
    console.log('Сервер запущено на порту 3000');
});


const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('MedicineDeliveryDB');
    const collection = database.collection('shops');

    const docs = await collection.find({}).toArray();
        
    console.log("Всі документи з колекції 'shops':");
    console.log(docs);
    return docs;
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);