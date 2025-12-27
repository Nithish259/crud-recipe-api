const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection was successful!"));

app.listen(port, () =>
  console.log("The app is listening on port number" + port)
);
