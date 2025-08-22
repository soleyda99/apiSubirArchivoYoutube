const fs = require("fs");
const axios = require("axios");

const downloadFile = async (url: string, path: string): Promise<void> => {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(path);
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

module.exports = { downloadFile };
