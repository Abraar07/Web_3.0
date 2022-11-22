import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import authRoute from "./routes/authroute.js";
//import postRoutes from "./routes/posts.js";

const app = express();
//dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/auths",authRoute);


// mongodb connection
const CONNECTION_URL = "mongodb+srv://Krypt:web1234@abscluster.f5vt7.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log("server running on port :",PORT)))
.catch((error) => console.log(error.message))