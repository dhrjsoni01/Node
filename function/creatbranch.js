const branchModel = require('../models/branch');
const batchModel = require('../models/batch');
const branches = require('../config/branches');
exports.create =  (year,batch)=> {
  var i=0;
  branches.forEach((branch)=>{
    let code = `${branch.basecode}${year.slice(2)}`
    let newBranch = new branchModel({
      name: branch.name,
      branchCode: code
    });
    newBranch.save((err,data)=>{
      if (err) {
          console.log(err);
          return {
            status:"fail",
            message:"unable to create branch"
          };
      }else {
        batch.branch.push(data);
        i++;
        console.log(i);
        console.log(branches.length);
        if (branches.length==i) {
          console.log("loop is complited now saving batch");
          batch.save((err,savedbatch)=>{
            if (err) {
              console.log(err);
              return {
                status:"fail",
                message:"unable to push branch"
              };
            }else {
              console.log(savedbatch);
              console.log(`new batch is created of year : ${year}`);
              return {
                status:"success",
                message:`new batch is created of year : ${year}`
              }
            }
          });
        }
      }
    });
  });


};
