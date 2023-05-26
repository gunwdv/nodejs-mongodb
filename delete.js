const MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/ProjectCareplan";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("ProjectCareplan");
  let myquery = { name: "Company Inc" }
  dbo.collection("User").deleteOne(myquery, function(err, result) {
    if (err) throw err;
    console.log("1 Document deleted");
    db.close();
  });
});