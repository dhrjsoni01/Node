const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  return res.status(200).json({
    status: "success",
    message: "this is test route for login"
  });
})


// login form redering route
// techer login form render route
router.get("/teacher",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will render techers login page"
  });
})

// student login form render route
router.get("/student",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will render students login page"
  });
})

// admin login form render route
router.get("/admin",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will render admin login page"
  });
})


// login post router for validation and logging in

// techers login post route
router.post("/teacher",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will let teachers to login with valid credencials"
  });
})

// student login post route
router.post("/student",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will let students to login with valid credencials"
  });
})

// admin post login route
router.post("/admin",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will let admin to login with valid credencials"
  });
})

module.exports = router;
