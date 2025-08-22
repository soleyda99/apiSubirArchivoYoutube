"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const { uploadVideoController } = require("../controllers/videoController");
const router = Router();
router.post("/upload", uploadVideoController);
module.exports = router;
//# sourceMappingURL=videoRoutes.js.map