var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: "Title required"
  },
  email: {
    type: String
  },
  age:{
      type:Number
  }
});

var User = mongoose.model('User', userSchema)
module.exports = User;