var mongoose = require("mongoose");
var batchSchema = new mongoose.Schema({
  name: {type : String , unique: true},
  year: {type : String , unique: true},
  branch: [{
      name        : String,
      branchCode  : String,
      student     : [
        {
          type: mongoose.Schema.Types.ObjectId,
          rel : "Student"
        }
      ]
  }]
});

module.exports =  mongoose.model("Batch",batchSchema);
