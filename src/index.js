import "dotenv/config";

import express from "express";
import { connectDB } from "./config/db.js";
import urlRouter from "./routes/url.routes.js";
import welcomeRouter from "./routes/welcome.routes.js";

const app = express();

app.use(express.json());

app.use("/", welcomeRouter);
app.use("/", urlRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

void connectDB(process.env.DATABASE_URL);
