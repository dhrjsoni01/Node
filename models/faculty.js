var mongoose = require("mongoose");
var facultySchema = new mongoose.Schema({
  name : {
    first : String,
    middle: String,
    last  : String
  },
  gender : { type:String, default :"M"},
  department : String,
  vaified    : {type : Boolean,default : false},
  password   : {type : String,required : true},
  email      : {type : String,required : true},
  mobile     : String,

});

module.exports = mongoose.model("Faculty", facultySchema);
