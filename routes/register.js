const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRound  = 10;

//models
const facultyModel = require('../models/faculty');
const adminModel = require('../models/admin');
const studentModel = require('../models/student');
const batchModel = require('../models/batch');
const attendanceModel = require('../models/attendance');
const subjectModel = require('../models/subject');
const branchModel = require('../models/branch');




router.get('/',(req,res)=>{
  return res.status(200).json({
    status: "success",
    message: "this is test route for register"
  });
})


// register form redering route
// techer register form render route
router.get("/teacher",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will render techers register page"
  });
})

// student register form render route
router.get("/student",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will render students register page"
  });
})


// register post router for validation and register

// techers register post route
router.post("/teacher",(req,res)=>{
  console.log(req.body);
  let first = req.body.first,
      middle= req.body.middle,
      last  = req.body.last,
      email = req.body.email,
      passNormal = req.body.pass;
      console.log(first);
      console.log(last);
      console.log(email);
      console.log(passNormal);
      if (!first||!last||!email||!passNormal) {
        return res.status(400).json({
          status:"fail",
          message: "somthing is missing please check first name last name email and password"
        })
      }else {
        bcrypt.hash(passNormal,saltRound,(err,hash)=>{
          if (err) {
            return res.status(400).json({
              status : "fail",
              message: "problem in hasing you password"
            })
          }else {
            let newFaculty = new facultyModel({
              name : {
                first : first,
                middle: middle,
                last  : last
              },
              password   : hash,
              email      : email
            });
            newFaculty.save((err,data)=>{
              if (err) {
                console.log("error in saving data in database");
                return res.status(400).json({
                  status : "fail",
                  message: "error in saving data in database"
                });
              }else {
                console.log(data);
                return res.status(200).json({
                  status: "success",
                  message: "new faculty is register with us"
                })
              }
            });
          }
        });
      }
  // return res.status(200).json({
  //   status:"success",
  //   message: "this route will let teachers to register with valid credencials"
  // });
})

// student register post route
router.post("/student",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will let students to register with valid credencials"
  });
})

module.exports = router;
