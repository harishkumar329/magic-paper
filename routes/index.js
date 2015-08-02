var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
	res.render("index",{title_text:"Magic Paper"});
});

module.exports=router;
