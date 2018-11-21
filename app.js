const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Message = require('./models/message');
var indexRoutes = require('./routes/index');

var dburl = process.env.DATABASEPORT || 'mongodb://localhost:27017/portfolio';
var port = process.env.PORT || 3000;

mongoose.connect(dburl, { useNewUrlParser: true });
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use("/", indexRoutes);

app.listen(port, process.env.IP, function(){
  console.log("Portfolio is up!");
});
