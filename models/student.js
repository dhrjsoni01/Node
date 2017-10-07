var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({

    rollNo      : {type: String, unique:true, required:true },
    email       : {type: String, unique:true },
    name        : {type: String,required: true},
    password    : {type: String,required: true},
    mobile      : String,
    branchCode  : String,
    semester    : String,
    record      : [
                      {
                          semester    : String,
                          startDate   : String,
                          endDate     : String,
                          data        : [
                            {
                              date        : Date,
                              subject     : String,
                              subjectCode : String,
                              facultyID   :{type: mongoose.Schema.Types.ObjectId, rel : "Faculty"},
                              FacultyName : String,
                            }
                          ]
                      }
                  ]
});


module.exports = mongoose.model("Student", studentSchema);
