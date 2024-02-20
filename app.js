//import dependencies
import express from "express";
import { log } from "console";
import dotenv from "dotenv";
import logger from "morgan";
import NotesPage from "./routes/notes.js";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

// call config from dotenv, to let app able to read variables
dotenv.config();

// define the app and the PORT
const app = express();
const PORT = process.env.PORT || 7000; // if (process.env.PORT) undefined, then use 7000

// Middleware
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use("/notes", NotesPage.htmlContent);
app.use(express.static(__dirname + "../routes/public"));
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.status(404).send("Upss! page not found, sorry! :(");
// });

//GET method
app.get("/", (req, res) => {
  console.log(`${PORT}`);
  res.send("<h1>Let's add some notes!</h1><button onclick=window.location.href='/notes'>Go to notes</button>");
  });
app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/routes/public/index.html");
});

//POST method
app.post("/notes", (req, res) => {
  const userinput = req.body.userInput;
  if (typeof userinput !== "string") {
    return res.status(400).send("The value need to be a string");
  }

  try {
    fs.writeFileSync("notes.txt", userinput);
    res.send(`The value "${userinput}" is saved in notes.txt`);
  } catch (error) {
    console.error("Error to write in the file", error);
    res.status(500).send("Error to save the value on the file.");
  }
});

// listener
app.listen(PORT, () => {
  log(`The app is ready on:\thttp://localhost:${PORT}`);
});
