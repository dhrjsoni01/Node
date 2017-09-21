const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const logger 	        = require('morgan');
const router 	        = express.Router();
const port 	          = process.env.PORT || 3000;
const indexRoute      = require('./routes/index');
const studentRoute    = require('./routes/student');
const adminRoute      = require('./routes/admin');
const teacherRoute    = require('./routes/teacher');
const loginRoute      = require('./routes/login');
const registerRoute   = require('./routes/register');

app.use(bodyParser.json());
app.use(logger('dev'));

app.use("/",indexRoute);
app.use("/student",studentRoute);
app.use("/admin",adminRoute);
app.use("/teacher",teacherRoute);
app.use("/login",loginRoute);
app.use("/register",registerRoute);

app.listen(port, (err) => {
  console.log(`server is running on port ${port}`);
});
