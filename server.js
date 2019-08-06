var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require("mongoose");


var MongoClient = require('mongodb').MongoClient;
var db_url = "mongodb+srv://tansenDB:123Tansen@cluster0-bqni0.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db_url, { useNewUrlParser: true });

MongoClient.connect(db_url, function(err, db){
    if(err) throw err;
    var dbo = db.db("tansenDB");

    dbo.createCollection("Users", function(err, res){
        if(err) throw err;
        console.log("collection created")
    });
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function(req, res){
    res.render(__dirname+'/form.ejs')
});

app.get('/view', function(req, res){
    res.render(__dirname+'/view.ejs')
});


app.post('/user/new', function(req, res){
    console.log('data received')
    console.log(req.body);

    MongoClient.connect(db_url, function(err, db){
        if(err) throw err;
        var dbo = db.db("tansenDB");

    var user = req.body;
    dbo.collection('Users').insertOne(user, function(err, res){
        if(err) throw err;
        console.log("1 document inserted")
        //db.close();
    });
});

});


app.get('/user/user:ID', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("tansenDB");
        dbo.collection("Users").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.name);
          db.close();
        });
      });
});
//require('./routes/user-routes.js')(app);
app.listen(3000);

console.log('Server running');