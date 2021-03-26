const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://adrien:adrien@cluster0.2vz2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();
  client.db("test").collection("devices");
  client.close();
})();
