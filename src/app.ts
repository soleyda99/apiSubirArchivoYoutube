const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const videoRoutes = require("./routes/videoRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Para cualquier archivo estático si querés servirlo
app.use("/static", express.static(path.join(__dirname, "../uploads")));

app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
