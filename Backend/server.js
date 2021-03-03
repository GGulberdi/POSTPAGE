
require('./Models/Post')
const app = require ('./app');
const mongoose = require ('mongoose');
require('dotenv').config({path:'.env'})


mongoose.connect(process.env.DATABASE,

    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });

    mongoose.Promise = global.Promise;// tell Mongoose to use ES6 promises
    mongoose.connection.on('error',(err)=>{
        console.error(`Database Connection Error -> ${err.message}`)
    })

// require our models here so that it can be accessed throughout the application
// require('./Models/Post')



const server = app.listen(8080, ()=>{console.log(`Express running on port ${server.address().port}`)})







// const app = require ('./app');
// const mongoose = require ('mongoose');
// require('dotenv').config({path:'.env'})


// // mongoose.connect(process.env.DATABASE,
// mongoose.connect("mongodb+srv://Gul:Tazedatabase@cluster0.aqxwp.mongodb.net/node_crud?retryWrites=true&w=majority",

//     {
//         useUnifiedTopology:true,
//         useNewUrlParser:true
//     });

//     mongoose.Promise = global.Promise;// tell Mongoose to use ES6 promises
//     mongoose.connection.on('error',(err)=>{
//         console.error(`Database Connection Error -> ${err.message}`)
//     })

// // require our models here so that it can be accessed throughout the application
// // require('./Models/Post')




// const server = app.listen(8080, ()=>{console.log(`Express running on port ${server.address().port}`)})
