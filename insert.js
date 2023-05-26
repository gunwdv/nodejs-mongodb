const MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/ProjectCareplan";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("ProjectCareplan");
  dbo.collection("User").insertOne(myobj, (err, res) => {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  })
});