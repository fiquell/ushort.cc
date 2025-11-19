import Url from "../models/url.model.js";
import { generateShortCode } from "../utils/generate-short-code.js";

export async function createShortUrl(req, res) {
    const { url: originalUrl } = req.body;

    if (!originalUrl || typeof originalUrl !== "string") {
        return res.status(400).json({
            success: false,
            error: "Invalid URL",
        });
    }

    try {
        const shortCode = generateShortCode();

        const newUrl = new Url({ originalUrl, shortCode });
        await newUrl.save();

        res.status(201).json({
            success: true,
            data: {
                originalUrl: newUrl.originalUrl,
                shortUrl: `${process.env.BASE_URL}/${newUrl.shortCode}`,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}

export async function redirectShortUrl(req, res) {
    const { shortCode } = req.params;

    if (!shortCode) {
        return res.status(400).json({
            success: false,
            error: "Missing short code",
        });
    }

    try {
        const found = await Url.findOne({ shortCode }).exec();

        if (!found) {
            return res.status(404).json({
                success: false,
                error: "URL not found",
            });
        }

        res.redirect(found.originalUrl);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}
