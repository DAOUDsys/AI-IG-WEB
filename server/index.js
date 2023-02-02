import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRouter from "./routes/postRoutes.js"
import dalleRouter from "./routes/dalleRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRouter)
app.use("/api/v1/dalle", dalleRouter)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(5000, () => console.log("server has started on port 5000"));
    } catch (error) {
        console.log(error);
        
    }
};

startServer();
