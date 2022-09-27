//read the products.js file
//add the products into mongodb???
var products = require('./products')
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017',function(err,con){
  var db = con.db('khut');
  db.collection('products').insertMany(products)
  .then((res)=>{console.log(res)})
  .catch(err=>console.log(err))
})

