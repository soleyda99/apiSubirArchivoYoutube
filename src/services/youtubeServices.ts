const { google } = require("googleapis");
const fs = require("fs");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const youtube = google.youtube({
  version: "v3",
  auth: oauth2Client,
});

const uploadVideoToYouTube = async (
  filePath: string,
  title: string,
  description: string
): Promise<string> => {
  const response = await youtube.videos.insert({
    part: ["snippet", "status"],
    requestBody: {
      snippet: { title, description },
      status: { privacyStatus: "unlisted" },
    },
    media: { body: fs.createReadStream(filePath) },
  });

  return response.data.id;
};

module.exports = { uploadVideoToYouTube };
