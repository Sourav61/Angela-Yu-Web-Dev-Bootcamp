// jshint esversion6

const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        // Connect the client to the server
        const database = client.db("fruitsDB");
        const fruits = database.collection("fruits");
        // create a document to insert
        const docs = [
            { 
                name: "Apple", 
                score: 8, 
                review: "Great Fruit"
            },
            { 
                name: "Orange", 
                score: 6,
                review: "Kinda Sour"  
            },
            { 
                name: "Banana", 
                score: 9,
                review: "Great Stuff"
            }
        ];
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        // const result = await fruits.insertMany(docs, options);
        // console.log(`${result.insertedCount} documents were inserted`);

        const fruit = fruits.find();
        // print a message if no documents were found
        if ((await fruit.count()) === 0) {
        console.log("No documents found!");
        }
        // replace console.dir with your callback to access individual elements
        await fruit.forEach(console.dir);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
