let express = require('express');
let app = express();

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongosh mongodb+srv://cluster0.69zqs.mongodb.net/myFirstDatabase --apiVersion 1 --username srushti"
const dotenv = reequire('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;

app.get('/',(req,res) => {
    res.send("Welcome to Express")

})
//Subpoint
app.get('/subpoint', (req,res) => {
    db.collection('subpoint').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
//Connection with db
MongoClient.connect(mongoUrl, (err,client) =>
{
    if(err) console.log(`Error while connecting`);
    db = client.db('detail');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})


