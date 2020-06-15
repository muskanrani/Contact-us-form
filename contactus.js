const express= require("express");
const bodyParser = require("body-parser");
const obj1= express();
const ejs = require("ejs");
var arr=["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]
obj1.set('view engine','ejs');
obj1.use(bodyParser.urlencoded({extended:true}));
obj1.use(express.static(__dirname+"/public"))

obj1.listen(2000,function(req,res){
    console.log("server running on port 2000");
});

obj1.get("/list",function(req,res)
{
    res.render("president",{v:arr});
});

obj1.get("/",function(req,res){
    res.render("contact");
});