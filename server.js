var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var comments=require('./routes/comments');

mongoose.connect('mongodb://localhost:27017/mean');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(comments);

app.listen(8181);