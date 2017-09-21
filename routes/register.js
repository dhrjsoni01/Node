const express = require('express');
const router = express.Router();

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
  return res.status(200).json({
    status:"success",
    message: "this route will let teachers to register with valid credencials"
  });
})

// student register post route
router.post("/student",(req,res)=>{
  return res.status(200).json({
    status:"success",
    message: "this route will let students to register with valid credencials"
  });
})

module.exports = router;
