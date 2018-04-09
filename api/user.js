var express = require('express');

var router = express.Router();

router.get('/user', (req, res, next)=> {
	res.status(200).json({success: "Get Everything is Fine"});	
});

router.get('/:id', (req, res, next)=> {
	console.log('req id : ', req);
	res.status(200).json({success: "req.params.id : " + req.params.id + ", Get Everything is Fine"});	
});

router.post('/', (req, res, next)=> {
	res.status(200).json({success: "Post Everything is Fine"});	
});

router.put('/', (req, res, next)=> {
	res.status(200).json({success: "Put Everything is Fine"});	
});

router.delete('/', (req, res, next)=> {
	res.stat(200).json({success: "Delete Everything is Fine"});	
});

function def() {
	console.log("def");
}

module.exports.router = router;
module.exports.def = def;


