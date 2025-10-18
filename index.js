import express from "express";

import fs from "fs";

import inquirer from "inquirer";

import qr from "qr-image";

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const url = req.body.url;

  let fileName = `qr_${Date.now()}.png`;

  let qr_svg = qr.image(url);

  const filePath = `public/images/${fileName}`;

  qr_svg.pipe(fs.createWriteStream(filePath));

  fs.writeFile("url.txt", url, (err) => {
    if (err) throw err;
    console.log(fileName);
  });

  res.render("index", { qrImage: fileName });
});

app.listen(port, () => console.log("Server running on http://localhost:3000"));
