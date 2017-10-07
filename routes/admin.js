const express = require('express');
const router = express.Router();

//models
const facultyModel = require('../models/faculty');
const adminModel = require('../models/admin');
const studentModel = require('../models/student');
const batchModel = require('../models/batch');
const attendanceModel = require('../models/attendance');
const subjectModel = require('../models/subject');
const branchModel = require('../models/branch');

const createbranch = require('../function/creatbranch');

router.get('/',(req,res)=>{
  return res.status(200).json({
    status: "success",
    message: "this is the test route for admin"
  });
})

router.get('/addbatch',(req,res)=>{
  return res.status(200).json({
    status: "success",
    message: "this is the test route for admin"
  });
})
router.post('/addbatch',(req,res)=>{
  let year = req.body.year;
  console.log(req.body);
  console.log(year);
  if (!year) {
    return res.status(400).json({
      status:"fail",
      message: "somthing is missing (year name)"
    });
  }else {
    let newBatch = new batchModel({
      name :year,
      year : year
    });
    newBatch.save((err,data)=>{
      if (err) {
        console.log("error in creating new batch");
        console.log(err);
        return res.status(400).json({
          status:"fail",
          message: "error in creating new batch"
        });
      }else {
        // console.log(`new batch: ${year} is created`);
        // return res.status(200).json({
        //   status: "success",
        //   message: `new batch: ${year} is created`
        // });
        return res.json(createbranch.create(year,data));

      }
    });
  }
})


module.exports = router;
