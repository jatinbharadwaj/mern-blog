const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// const { postRoute } = require("./routes/postRoutes");

// set up express

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("starting server...");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () =>
  console.log(`Server started on port: http://localhost:${PORT}`)
);

// Set up routes

app.use("/posts", require("./routes/postRoutes"));

// set up mongoose

console.log("connecting to MongoDB...");
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established");
  }
);
