const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const videoRoutes = require("./routes/videoRoutes");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "../video")));
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(path.join(__dirname, "../video"));
});
