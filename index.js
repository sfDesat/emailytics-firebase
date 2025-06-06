const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 Explicitly set content type for .js
app.get("/firebase-login.js", (req, res) => {
  res.type("application/javascript");
  res.sendFile(path.join(__dirname, "public", "firebase-login.js"));
});

// OR if you're serving all public files:
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
