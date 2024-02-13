//import dependencies
import express from "express";
import { log } from "console";
import dotenv from "dotenv";
import logger from "morgan";
import NotesPage from "./routes/notes.js";
import path from "path";

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

//GET method
app.get("/", (req, res) => {
  console.log(`${PORT}`);
  res.send("<h1>Let's add some notes!</h1>");
});
app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/routes/public/index.html");
});

//POST method
app.post("/notes", (req, res) => {
  console.log(req.body);
  res.send(`Note added`); //or res.json({msg: "Note added"}) (these methods are used for Frontend)

});

// listener
app.listen(PORT, () => {
  log(`The app is ready on:\thttp://localhost:${PORT}`);
});
