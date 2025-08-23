const fs = require("fs");
const { uploadVideoToYouTube } = require("../services/youtubeServices");
const { downloadFile } = require("../utils/downloadFile");
import type { Request, Response } from "express";

const uploadVideoController = async (req: Request, res: Response) => {
  try {
    const { title, description, video_url } = req.body;

    if (!title || !description || !video_url) {
      res.status(400).json({ error: "Missing parameters" });
      return;
    }

    const filePath = "./temp_video.mp4";
    await downloadFile(video_url, filePath);

    const youtubeVideoId = await uploadVideoToYouTube(
      filePath,
      title,
      description
    );

    fs.unlinkSync(filePath);

    res.status(200).json({ status: true, youtubeVideoId });
  } catch (error) {
    res.status(500).json({ error: "Error uploading video" });
  }
};

module.exports = { uploadVideoController };
