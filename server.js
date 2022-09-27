var express = require('express')
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/questions",function(req,res){
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    const db = client.db('khut')
    db.collection('questions').find().toArray((err, result) => {
      if (err) throw err
      res.send(result)
    })
  })
})
app.post("/addProducts",function(req,res){
  console.log("new prod:",req.body);
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    const db = client.db('khut')
    db.collection('products').insertOne(req.body,function(err,data){
      res.send(data)
    })
  })
})
app.listen(4500,()=>{console.log("server is running on 4500")})