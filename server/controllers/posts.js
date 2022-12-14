import mongoose from "mongoose";
import AuthMessage from "../models/authMessage.js";

export const getPosts = async (req, res) => {
    try{
        const postMessage = await AuthMessage.find();
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new AuthMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

