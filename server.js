var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var comments=require('./routes/comments');

mongoose.connect('mongodb://localhost:27017/mean');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/public'));

app.use('/api',comments);

app.get('*', function(req, res) {
		res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

app.listen(8181);