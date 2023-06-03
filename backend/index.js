import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRouter from './routes/posts.js'

const app = express();

// defining routes

app.use('/post', postRouter)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://shubham:nokia300@shubham-mongo-cluster.cqzbzgm.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`sever running on port ${PORT}`)))
    .catch((error) => console.log(error))


// mongoose.set('useFindAndModify', false)