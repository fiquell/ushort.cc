import express from "express";
import { rootHandler } from "../controllers/welcome.controller.js";

const welcomeRouter = express.Router();

welcomeRouter.get("/", rootHandler);

export default welcomeRouter;
