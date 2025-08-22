const { Router } = require("express");
const { uploadVideoController } = require("../controllers/videoController");

const router = Router();
router.post("/upload", uploadVideoController);

module.exports = router;
