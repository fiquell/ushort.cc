import mongoose from "mongoose";

export async function connectDB(uri) {
    await mongoose
        .connect(uri)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
}
