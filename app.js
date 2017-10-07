const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const logger 	        = require('morgan');
const router 	        = express.Router();
const port 	          = process.env.PORT || 3000;
const mongoose        = require('mongoose');

//config files
const database        = require('./config/database');
mongoose.connect(database.local,(err,done)=>{
  if (err) {
    console.log("error in connecting local databse");
  }else {
    console.log("connected to local database");
  }
});

//routes files require statments
const indexRoute      = require('./routes/index');
const studentRoute    = require('./routes/student');
const adminRoute      = require('./routes/admin');
const teacherRoute    = require('./routes/teacher');
const loginRoute      = require('./routes/login');
const registerRoute   = require('./routes/register');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));

//using routes
app.use("/",indexRoute);
app.use("/student",studentRoute);
app.use("/admin",adminRoute);
app.use("/teacher",teacherRoute);
app.use("/login",loginRoute);
app.use("/register",registerRoute);


//server starting statment
app.listen(port, (err) => {
  console.log(`server is running on port ${port}`);
});
