var express = require('express')
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')
var productRouter = require('./product/products.router')
var quizRouter = require('./quiz.router')
var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/product",productRouter)
app.use("/quiz",quizRouter)



app.listen(4500,()=>{console.log("server is running on 4500")})