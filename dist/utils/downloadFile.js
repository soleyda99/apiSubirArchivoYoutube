"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const axios = require("axios");
const downloadFile = async (url, path) => {
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
//# sourceMappingURL=downloadFile.js.map