const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadVideoController } = require("../controllers/videoController");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("video"), uploadVideoController);

module.exports = router;
