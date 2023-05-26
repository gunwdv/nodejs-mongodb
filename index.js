const {MongoClient} = require('mongodb');

// const uri = "mongodb://myuser:mypassword@localhost:27017/test?retryWrites=true&w=majority";
const uri = "mongodb://127.0.0.1:27017/ProjectCareplan?directConnection=true&serverSelectionTimeoutMS=2000";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) {
//     console.log("Error connecting to database: ", err);
//     return;
//   }
  
//   console.log("Connected to database");
  
// //   const db = client.db("test");
  
//   // Perform database operations here
  
// //   client.close();
// });

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const main = async () => {
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        
        await client.close();
    }
}

main()
