const express = require('express');
const router = express.Router();

// basic routes for all
// home route for app
  router.get('/',(req,res)=>{
    return res.status(200).json({
      status: "success",
      message: "welcome to jec app"
    });
  })

// notice route for app
  router.get('/notice',(req,res)=>{
    return res.status(200).json({
      status: "success",
      message: "here you will get all public notifications"
    });
  })

module.exports = router;
