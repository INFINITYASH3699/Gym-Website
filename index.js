var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017/UserInfo')
var db = mongoose.connection
db.on('error', () => console.log("Error to connecting the database"))
db.once('open', () => console.log("Connected to database"))

app.post('/submitform', (req , res) =>{
    var name = req.body.fname
    var email = req.body.email
    var message = req.body.message

    var data={
      "name":name,
      "email":email,
      "message":message
    }

  db.collection('UserInfo').insertOne(data,(err,collecton) =>{
    if(err){
        throw err;
    }
    console.log("Record inserted successfully")
  })
  return res.redirect('index.html')
})
 
app.get('/', function(req, res){
  
  res.set({
    "Allow-access-Allow-Origin":'*'
  })
  return res.redirect('index.html')
});

app.post('/regform', (req , res) =>{
  var name = req.body.ffname
  var email = req.body.email
  var password = req.body.password

  var data={
    "name":name,
    "email":email,
    "password":password
  }

db.collection('UserReg').insertOne(data,(err,collecton) =>{
  if(err){
      throw err;
  }
  console.log("Record inserted successfully")
})
return res.redirect('index.html')
})

app.get('/', function(req, res){

res.set({
  "Allow-access-Allow-Origin":'*'
})
return res.redirect('index.html')
});



app.listen(5500);

console.log("Connection is successful")




