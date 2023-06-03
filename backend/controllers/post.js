import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find()
        res.status(200).json(PostMessages)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new postMessage(post)
    try {
        await newPost.save()

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

