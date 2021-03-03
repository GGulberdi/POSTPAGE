const express = require('express');
const bodyParser = require('body-parser')//we added

const app = express()//initialise app with express


const routes= require('./Routes/PostRoutes')

app.use(bodyParser.json());//we added
app.use(bodyParser.urlencoded({ extended: false }));//we added

app.use('/', routes)
 


 

module.exports = app

