const express = require('express');
const bodyParser = require('body-parser')//we added
const  cors =require ('cors')

const app = express()//initialise app with express

const routes= require('./Routes/PostRoutes')


let corsOptions = {
    origin: 'http://127.0.0.1:5500',   //This is for frontend
    optionsSuccessStatus: 200 // For legacy browser support
  };

  app.use(cors(corsOptions));


app.use(bodyParser.json());//we added
app.use(bodyParser.urlencoded({ extended: false }));//we added

app.use('/', routes)
 
app.use(function (req, res, next) {
    req.headers['content-type'] = 'application/json';
    next();
  });

 

module.exports = app

