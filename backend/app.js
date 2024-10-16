const express = require("express");
const mongoose = require("mongoose");
const HttpError = require("./utils/Http-Error");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors({
  origin: '*',  // Your frontend's URL
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // If you're using cookies or authorization
}));

// Preflight handling
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');
  res.sendStatus(200);  // Respond with HTTP 200 for preflight
});

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the InterIIT API!");
});

const userRoutes = require("./routes/UserRoutes");
const projectRoutes = require("./routes/ProjectRoutes");
const biddingRoutes = require("./routes/BiddingRoutes");

app.use(userRoutes);
app.use(projectRoutes);
app.use(biddingRoutes);

app.use((req, res, next) => {
  next(new HttpError("Could not find this route.", 404));
});

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(8000, () => console.log("Listening on port 8000"));
