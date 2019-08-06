var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require("mongoose");



var db_url = "mongodb+srv://tansenDB:123Tansen@cluster0-bqni0.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
    console.log(err);
    console.log('Could not connect to mongodb');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/form.html')
});

app.get('/view', function(req, res){
    res.sendFile(__dirname+'/view.html')
});


// app.post('/user/create', function(req, res){
//     console.log('data received')
//     console.log(req.body);

    // MongoClient.connect(db_url, function(err, db){
    //     if(err) throw err;
    //     var dbo = db.db("tansenDB");

    // var user = req.body;
    // dbo.collection('Users').insertOne(user, function(err, res){
    //     if(err) throw err;
    //     console.log("1 document inserted")
//     db.close();
//     });
// });

// });


// app.get('/user/user:ID', function(req, res){
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("tansenDB");
//         dbo.collection("Users").findOne({}, function(err, result) {
//           if (err) throw err;
//           console.log(result.name);
//           db.close();
//         });
//       });
// });
require('./routes/user-routes.js')(app);

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
    });