const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";


const client = new MongoClient(url);
 
try {
    // Connect to the MongoDB cluster
    client.connect().then(async () => {
        // Make the appropriate DB calls
        list = await client.db("salesanddeals").collection("sales_on_clothes").findOne({});
        console.log(list)
    }

    );

} catch (e) {
    console.error(e);
} finally {
    client.close();
}

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
