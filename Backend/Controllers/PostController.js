const mongoose = require('mongoose');

//import  and initiate the posts model to query the database
const Posts= mongoose.model('posts');

// function for BASE route on '/'
exports.baseRoute = async(req,res)=>{
    res.send('Server Running')
}


// function to get posts on  route '/getPosts'
exports.getPosts = async(req,res)=>{
    const posts = await Posts.find()
    res.json(posts)
}

// exports.getOnePost = async(req,res)=>{
//     let postID=req.params.id
//      const post = await Posts.findById({_id:postID})
//     res.json(post)
// }
  
  
// function to get single post
exports.getSinglePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    console.log(postID)

    await new Posts.findById({_id:postID},(err,data)=>{
        console.log(data)
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post found',
                data,
            })
        }
    })
    
}

// function to create the post
exports.createPost = async(req,res)=>{    // we use mongodb's save functionality here
    const newone =    await new Posts(req.body)
        newone.save((err,data)=>{
        console.log(data)
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            res.status(200).json({data})
        }
    })
}

//update a single post
exports.updatePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    await  Posts.findByIdAndUpdate({_id:postID},{$set:req.body},(err,data)=>{
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post updated',
                data,
            })
        }
    })
}

//delete a single post
exports.deletePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    await  Posts.deleteOne({_id:postID},(err,data)=>{
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post deleted',
                data,
            })
        }
    })
}