import express from "express";
import {
    createShortUrl,
    redirectShortUrl,
} from "../controllers/url.controller.js";

const urlRouter = express.Router();

urlRouter.post("/shorten", createShortUrl);
urlRouter.get("/:shortCode", redirectShortUrl);

export default urlRouter;
