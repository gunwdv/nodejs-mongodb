const MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/ProjectCareplan";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("ProjectCareplan");
  dbo.collection("User").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});