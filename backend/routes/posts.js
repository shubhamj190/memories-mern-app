import express from 'express'
import { createPost, getPosts } from '../controllers/post.js'



const router = express.Router()


router.get('/', getPosts)
router.get('/createpost', createPost)


export default router