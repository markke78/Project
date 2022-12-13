const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const User = require("../model/user");


const createPost = async (request, response) => {
    const data = request.body;

    //const token =request.headers?.authorization.split(" ")[1];
    if(request.decodedEmail){

        const findUser = await User.findOne({email: request.decodedEmail});

        if(findUser){
            const newPost = new Post({
            title: data.title,
            subTitle: data.subTitle,
            description: data.description,
            user: findUser._id
            });

            try{
                const output = await newPost.save();
                return response.status(201).json({
                message: "Post created successfully",
                post: output
                });
            }catch(error){
                return response.status(500).json({
                message: "There was an error",
                error
                });
            }
        }else{
            return response.status(404).json({
                message: "User does not exist",
            });
        }


    }else{
        return response.status(401).json({
            message: "Token required",
        });
    }
}

const getAllPosts = async (req, res) => {
    try{
        const data = await Post.find().populate({
            path: "user",
        });

        return res.status(200).json({
            message: "Posts found Successfully",
            data
        });
    }catch(error){
        return res.status(500).json({
            message: "There was an error",
            error
        });
    }

}

module.exports = {
    createPost,
    getAllPosts
}