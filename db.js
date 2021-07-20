// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb+srv://ritheek:user123@cluster0.ht83h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
//     // ... do something here
//     console.log("connected")
//   })

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ritheek:user123@cluster0.ht83h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
Mongoclient.connect((err,client) => {
  const collection = client.db("test").collection("devices");
    // client.db("Mentoring").collection("appoitmentDetails").insertOne(
    //   {
    //     'Name' : 'Ritheek',
    //     'PhoneNo' : '9676' 
    //   }
    );
  // perform actions on the collection object

  console.log('connected')
  client.close();
});
