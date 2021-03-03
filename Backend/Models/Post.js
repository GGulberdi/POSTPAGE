
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//create post schema


// const PostsSchema = new mongoose.Schema({
//     title:{
//         type: String
//     },
//     author:{
//         type: String
//     },
//     desc:{
//         type: String
//     },
// })

const PostsSchema = new mongoose.Schema({
    title: String ,
    author:String,
    desc:String,
})

// let Posts = mongoose.model('posts', PostsSchema)
module.exports= mongoose.model('posts', PostsSchema)