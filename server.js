var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var comments=require('./routes/comments');
var path=require('path');

mongoose.connect('mongodb://localhost:27017/mean');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/public'));

app.use('/api',comments);

app.get('*', function(req, res) {
		// res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
		res.sendFile('index.html',{root:path.join(__dirname,'/public')});
	});

app.listen(8181);