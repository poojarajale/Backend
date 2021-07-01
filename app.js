const express = require('express');
const app = express();
//importing packages
//const mongoose = require("mongoose");
const mongoose=require("./DB/database");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.json());


// using middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//add & configure middleware
const contactRouter = require("./routes/routes");
const { post } = require('./routes/routes');
app.use('/',contactRouter);


//middleware for user profile
// const userRouter = require("./routes/userRoute");
// app.use('/api',userRouter);

//define port
const port =8000;
//listening server on port
app.listen(port, () => console.log("server started on 8000"));