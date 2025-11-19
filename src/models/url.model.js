import mongoose from "mongoose";

const { Schema } = mongoose;

const urlSchema = new Schema(
    {
        originalUrl: {
            type: String,
            required: true,
            trim: true,
        },
        shortCode: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true,
        },
    },
    { timestamps: true },
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
