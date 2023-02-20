const express = require('express')
const app = express()
var router   = express.Router();
var bodyParser     = require('body-parser');
const { getItems, getItem, getItembyBrand } = require('../database_connection')
var request = require('request');
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */

router.get('/', function(req, res){
	res.send("send and recieved")
});

router.get('/deals', function (req, res){
	getItems()
    .then((items) => {
		res.set({
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		});
	
		res.json({
			status : 200,
			data: items
		})
	});
})

router.get('/deals/:brand', function (req, res){
	var brand = req.params.brand
	getItembyBrand(brand)
    .then((items) => {
		res.set({
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		});
	
		res.json({
			status : 200,
			data: items
		})
	});
})

router.get('/deal/:id', function (req, res){
	console.log(req.params.id)
	var id = req.params.id
	getItem(id)
    .then((items) => {
		res.json(items)
	});
})


module.exports = router;
