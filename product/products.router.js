var express = require('express')
const MongoClient = require('mongodb').MongoClient
var router = express.Router();
const { ObjectId } = require('mongodb');
const { getAllProducts, addProduct, getProductDetailsById, deleteProduct, searchProducts } = require('./product.controller');

router.post("/addProducts",addProduct)
router.get("/getAllProducts",getAllProducts)
router.get("/getProductDetails/:id",getProductDetailsById)
router.delete("/deleteProduct/:id",deleteProduct)
router.get("/searchProducts/",getAllProducts)
router.get("/searchProducts/:skey",searchProducts)

module.exports=router;