const express = require("express");
const rootDir = require("./utils/path");
const path = require("path");
const routes = require("./routes/routes")
var bodyParser = require('body-parser')

// init app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// setting normal fs
app.use(express.static(path.join(rootDir, "public")));

// setting templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes
app.use(routes)

app.use((req, res, next) => {
  console.log("Server is uprunning");
  res.send("<h1>Server Running</h1>");
});

// running server
app.listen(3000);
