const { MongoClient, ObjectId } = require('mongodb')
const dotenv = require('dotenv');
dotenv.config();
const connectionUrl = process.env.MONGODB_URL
const dbName = 'salesanddeals'

let db
console.log(connectionUrl)
const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const getItems = () => {
  const collection = db.collection('sales_on_clothes')
  return collection.find({}).toArray()
}

const getItem = (id) => {
    let Newid = new ObjectId(id)
    const collection = db.collection('sales_on_clothes')
    return collection.find({ _id: Newid }).toArray()
  }

const getItembyBrand = (brand) => {
  const collection = db.collection('sales_on_clothes')
  return collection.find({ "brand": brand }).toArray()
}

module.exports = { init, getItems, getItem, getItembyBrand }