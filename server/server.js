const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
console.log("Environment variables loaded", process.env.MONGODB_URI);
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

//NOTE: CHANGE ORIGIN IF YOUR FRONTEND IS BEING SERVED ON A DIFFERENT
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//so that we parse the cookies that enter the server.
app.use(cookieParser());

// Configure both serve-favicon & static middleware
// to serve from the production 'dist' folder
app.use(favicon(path.join(__dirname, "../client/dist/favicon.ico")));
app.use(express.static(path.join(__dirname, "../client/dist")));

// Put API routes here, before the "catch all" route
// const ensureLoggedIn = require('./config/ensureLoggedIn');

app.use("/api/demo", require("./routes/api/demo"));
app.use("/api/users", require("./routes/api/userRouter"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  const filePath = path.join(__dirname, "../client/dist", "index.html");
  console.log("Serving file from path:", filePath);
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

// test
