var Comment=require('../models/comment');
var express=require('express');
var router=express.Router();

router.route('/comments').get(function(req,res){
	Comment.find(function(err,comments){
		if(err)
			return res.send(err);

		res.json(comments);
	});
});

router.route('/comments/:id').get(function(req,res){
	Comment.findOne({_id:req.params.id},function(err,comment){
		if(err)
			return res.send(err);

		res.json(comment);
	})
});

router.route('/comments').post(function(req,res){
	Comment.create({
			author : req.body.author,
			text : req.body.text
		}, function(err, comment) {
			if (err)
				return res.send(err);

			res.json({ message: 'Comment Added' });
		});
});

router.route('/comments/:id').put(function(req,res){
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

router.route('/comments/:id').delete(function(req,res){
	Comment.remove({_id:req.params.id},function(err,comment){
		if(err)
			return res.send(err);

		res.json({ message: 'Comment Removed' });
	});
});

module.exports=router;