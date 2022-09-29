var express = require('express')
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
const { ObjectId } = require('mongodb')

router.get("/questions",function(req,res){
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    const db = client.db('khut')
    db.collection('questions').find().toArray((err, result) => {
      if (err) throw err
      res.send(result)
    })
  })
})

module.exports=router;