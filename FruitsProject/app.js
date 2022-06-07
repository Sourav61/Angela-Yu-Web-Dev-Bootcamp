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
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     rating: 10,
//     review: "Peaches are so yummy!"
// })

const fruit = new Fruit({
    name: "Apple",
    rating: 9,
    review: "An apple a day keeps the doctor away!"
})

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
        name: "Pineapple",
        score: 9,
        review: "Great Fruit."
});

// pineapple.save();

const person = new Person(
    {
        name: "John Doe",
        age: 37,
        favouriteFruit: pineapple
    }
)

const Sour = new Person({
    name: "Sourav",
    age: 18
})

// person.save();

// Sour.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 3,
//     review: "The eww fruit"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: "5",
//     review: "The sour fruit"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 7,
//     review: "Tasty fruit"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all fruits to FruitsDB");
//     }
// });

// Fruit.updateOne({ _id: "629f18b09351c2d4072002f0" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the content")
//     }
// })

// Fruit.deleteOne({ name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!")
//     }
// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);

        // mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })

    }
})

// Person.deleteMany({ name: "Sourav" }, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succefully deleted all of the documents");
//     }
// })

// Fruit.deleteMany({ name: "Apple" },function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the document!");
//     }
// })

Person.updateOne({ name: "Sourav" }, { favouriteFruit: fruit }, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfuly added relationship of person with fruit document");
    }
})