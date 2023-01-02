require("dotenv").config();

const express = require("express");
const fileupload = require("express-fileupload");

const corsHandler = require("../src/middlewares/cors");

const app = express();
const port = process.env.SERVER_PORT || 5000;

require("./db/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use(corsHandler);

app.get("/", (req, res) => {
  res.send("Welcome || Starter Project for Nodejs + Mysql");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
