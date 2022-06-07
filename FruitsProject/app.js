// // jshint esversion6

// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =
//   "mongodb://localhost:27017";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//     try {
//         await client.connect();
//         // Connect the client to the server
//         const database = client.db("fruitsDB");
//         const fruits = database.collection("fruits");
//         // create a document to insert
//         const docs = [
//             { 
//                 name: "Apple", 
//                 score: 8, 
//                 review: "Great Fruit"
//             },
//             { 
//                 name: "Orange", 
//                 score: 6,
//                 review: "Kinda Sour"  
//             },
//             { 
//                 name: "Banana", 
//                 score: 9,
//                 review: "Great Stuff"
//             }
//         ];
//         // this option prevents additional documents from being inserted if one fails
//         const options = { ordered: true };
//         // const result = await fruits.insertMany(docs, options);
//         // console.log(`${result.insertedCount} documents were inserted`);

//         const fruit = fruits.find();
//         // print a message if no documents were found
//         if ((await fruit.count()) === 0) {
//         console.log("No documents found!");
//         }
//         // replace console.dir with your callback to access individual elements
//         await fruit.forEach(console.dir);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "An apple day keeps a doctor away!!"
})

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person(
    {
        name: "Sourav",
        age: 18
    }
)

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 3,
    review: "The eww fruit"
})

const orange = new Fruit({
    name: "Orange",
    score: "5",
    review: "The sour fruit"
})

const banana = new Fruit({
    name: "Banana",
    score: 7,
    review: "Tasty fruit"
})

Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully saved all fruits to FruitsDB");
    }
});