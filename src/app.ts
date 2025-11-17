import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(express.json()); 
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());

// intisalizing rotues 
import userRouters from "./router/user-routes.js";
import musicRouters from "./router/music-router.js";

// routes
app.use("/api/v1/user", userRouters);
app.use("/api/v1/music", musicRouters);

export {app};