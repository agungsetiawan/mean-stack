var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


var Schema=mongoose.Schema;
var commentSchema=new Schema({
	author:String,
	text:String
});

var Comment=mongoose.model('comment',commentSchema);

app.get('/comments',function(req,res){
	Comment.find(function(err,comments){
		if(err)
			return res.send(err);

		res.json(comments);
	});
});

app.get('/comments/:id',function(req,res){
	Comment.findOne({_id:req.params.id},function(err,comment){
		if(err)
			return res.send(err);

		res.json(comment);
	})
});

app.post('/comments',function(req,res){
	Comment.create({
			author : req.body.author,
			text : req.body.text
		}, function(err, comment) {
			if (err)
				return res.send(err);

			res.json({ message: 'Comment Added' });
		});
});

app.put('/comments/:id',function(req,res){
	Comment.findOne({_id:req.params.id},function(err,comment){
		if(err)
			return res.send(err);

		comment.author=req.body.author;
		comment.text=req.body.text;
		comment.save(function(err,comment){
			if(err)
				return res.send(err);

			res.json({message:"Comment Updated"});
		});
	});
});

app.delete('/comments/:id',function(req,res){
	Comment.remove({_id:req.params.id},function(err,comment){
		if(err)
			return res.send(err);

		res.json({ message: 'Comment Removed' });
	});
});

app.listen(8181);