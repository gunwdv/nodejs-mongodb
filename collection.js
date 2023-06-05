//const MongoClient = require('mongodb').MongoClient*****
//let url = "mongodb://localhost:27017/ProjectCareplan";*****

//const {MongoClient} = require('mongodb');

// const uri = "mongodb://myuser:mypassword@localhost:27017/test?retryWrites=true&w=majority";*****
//const uri = "mongodb://127.0.0.1:27017/ProjectCareplan?directConnection=true&serverSelectionTimeoutMS=2000";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//async function listDatabases(client){
//    databasesList = await client.db().admin().listDatabases();
 
//    console.log("Databases:");
//    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//};

//const main = async () => {
//    try {
//       await client.connect();
 //       db.createCollection("User", (err, res) => {
//             if (err) throw err;
 //            conssole.log("Collection create!");
  //           db.close();
 //          })
 //       await listDatabases(client);
     
 //   } catch (e) {
 //       console.error(e);
//    } finally {
        
 //       await client.close();
 //   }
//}

//main()

//const MongoClient = require('mongodb').MongoClient;
//let url = "mongodb://localhost:27017/ProjectCareplan"

//MongoClient.connect(url, (err, db) => {
//  if (err) throw err;
//  let dbo = db.db("ProjectCareplan");
//  db.createCollection("User", (err, res) => {
//    if (err) throw err;
//    conssole.log("Collection create!");
//    db.close();
//  })
//})
const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
    try {
        await client.connect();

        const db = client.db('ProjectCareplan');
        await db.createCollection("Cmplan");

        console.log("Collection created!");

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();