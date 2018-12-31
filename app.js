const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var indexRoutes = require('./routes/index');
var http = require('http');
var enforce = require('express-sslify');

// var dburl = process.env.DATABASEPORT || 'mongodb://localhost:27017/portfolio';
var port = process.env.PORT || 3000;

// mongoose.connect(dburl, { useNewUrlParser: true });
var app = express();

// app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use("/", indexRoutes);

http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});
