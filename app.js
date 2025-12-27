const express = require("express");
const receipeRouter = require("./routes/reciepeRoutes");
const app = express();
app.use(express.json());

app.use("/receipes", receipeRouter);

module.exports = app;
