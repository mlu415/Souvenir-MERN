import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

  /**
 * fetches all posts from the server
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 * 
 * returns the error upon failure
 */

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

  /**
 * Creates a post from information filled in the form
 * 
 * Inputs information from form
 * 
 * creates new postmessage from the information 
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 */
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 /*
 * Updates a post given an id and information filled in the form
 * 
 * Input ID
 * 
 * Updates post if id is found
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 */
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id`);

   // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
}

 /* Deletes a post given an post id
 * 
 * Input ID
 * 
 * Deletes post if id is found
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 */
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

/* Likes a post given an post id
 * 
 * Input ID
 * 
 * Updates like count by one if id is found
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 * 
 */

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;