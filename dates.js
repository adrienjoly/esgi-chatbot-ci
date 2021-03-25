const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adrien:adrien@cluster0.2vz2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  await client.connect();
  const collection = client.db("test").collection("dates");

  await collection.insertOne({ date: new Date() });

  const docs = await collection.find({}).toArray();
  console.log(docs);

  // perform actions on the collection object
  client.close();
})();
