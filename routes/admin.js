const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  return res.status(200).json({
    status: "success",
    message: "this is the test route for admin"
  });
})

module.exports = router;
