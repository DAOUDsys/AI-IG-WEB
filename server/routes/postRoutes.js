import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import PostModel from "../mongodb/models/post.js";

const postRouter = express.Router();
dotenv.config();

postRouter.route("/").get((req, res) => {
  res.send("sadfjkl");
});

export default postRouter;
