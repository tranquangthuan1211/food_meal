const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Login = new Schema({
    "name":{type: String},
    email:{type: String},
    passWorld:{type:String}

  });
  module.exports = mongoose.model("Login",Login)