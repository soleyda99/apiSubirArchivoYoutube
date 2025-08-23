"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const { uploadVideoToYouTube } = require("../services/youtubeServices");
const uploadVideoController = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description || !req.file) {
            return res
                .status(400)
                .json({ error: "Missing parameters or video file" });
        }
        const filePath = req.file.path; // Multer guarda temporalmente
        const youtubeVideoId = await uploadVideoToYouTube(filePath, title, description);
        fs.unlinkSync(filePath); // borramos el archivo temporal
        res.status(200).json({
            status: true,
            videoId: youtubeVideoId,
            url: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Error uploading video" });
    }
};
module.exports = { uploadVideoController };
//# sourceMappingURL=videoController.js.map