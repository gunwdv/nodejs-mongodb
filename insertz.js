// นำเข้าโมดูล MongoDB
//const MongoClient = require('mongodb').MongoClient;

// กำหนด URL ของ MongoDB
//const url = 'mongodb://localhost:27017';
const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
// กำหนดชื่อฐานข้อมูล
const dbName = 'ProjectCareplan';

// สร้างอ็อบเจ็กต์ MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(function(err) {
  if(err) {
    console.error(err);
    return;
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // กำหนดข้อมูลที่ต้องการส่งไปยัง MongoDB
  const document = {
    ID: "5234545812",
    CGID: "2545864435",
    Checkintime: "08.10",
    Checkouttime: "16.35",
    DATE: "05/04/64",
    Workphoto: "",
    Activity: "ดูแลผู้ป่วย",
    Location: "โรงพยาบาล"
  };

  // สร้าง collection ชื่อ 'myCollection' ใส่ข้อมูลลงไป
  db.collection('CG_ATTENDANCE').insertOne(document, function(err, res) {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Document inserted");
  
    // ปิดการเชื่อมต่อกับ MongoDB
    client.close();
  });
});