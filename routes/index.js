var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await userModel.find({});
  res.send(users);
});


router.get("/createuser", async (req,res)=>{
  const user = await userModel.create({
    username : "John",
    password : "pencile",
    post : [],
    
    email : "wick@gmail.com",
    fullname : "John Wick"
  })
  res.send(user);
});

router.get("/userposts", async(req,res)=>{
  let userPost = await userModel.findOne({_id : "658faea455987278932b9e51"}).populate("post");
  res.send(userPost);
})


router.get("/createpost", async(req,res)=>{
  const userPost = await postModel.create({
    postText : "I love Cars",
    user : "658faea455987278932b9e51"
  });
  let user = await userModel.findOne({_id : "658faea455987278932b9e51"});
  user.post.push(userPost._id);
  await user.save();
  res.send("Done!!!")
})



module.exports = router;
