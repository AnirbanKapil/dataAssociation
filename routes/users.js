var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dataassoc");

const userSchema = mongoose.Schema({
  username : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
  },
  post : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "post"
  }],
  dp : {
    type : String,
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  fullname : {
    type : String,
    required : true,
  }
});




module.exports = mongoose.model("user",userSchema);
