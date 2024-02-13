//import dependencies
import express from "express";
import { log } from "console";
import dotenv from "dotenv";
import logger from "morgan";
import NotesPage from "./routes/notes.js";

// call config from dotenv, to let app able to read variables
dotenv.config();

// define the app/server
const app = express();
// define the PORT
const PORT = process.env.PORT || 7000; // if (process.env.PORT) undefined, then use 7000

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET method
app.get("/", (req, res) => {
  console.log(`${PORT}: /Home`);
  res.send("<h1>Let's add some notes!</h1>");
});

app.use("/notes", NotesPage.htmlContent);


// listener
app.listen(PORT, () => {
  log(`The app is ready on:\thttp://localhost:${PORT}`);
});
