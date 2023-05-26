const MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/ProjectCareplan";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ProjectCareplan");
    dbo.collection("customers").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });