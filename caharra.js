
// import express from "express";
// import { log } from "console";
// import dotenv from "dotenv";
// import logger from "morgan";
// import NotesPage from "./routes/notes.js";
// import path from "path";

// const __dirname = path.resolve();

// // call config from dotenv, to let app able to read variables
// dotenv.config();

// // define the app/server and the PORT
// const app = express();
// const PORT = process.env.PORT || 7000; // if (process.env.PORT) undefined, then use 7000

// //Middleware
// //USE method
// //app.use("/notes", NotesPage.htmlContent);
// app.use(express.static(__dirname + "/routes/public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// //GET method
// app.get("/", (req, res) => {
//   console.log(`${PORT}: /Home`);
//   res.send("<h1>Let's add some notes!</h1>");
// });
// app.get("/notes", (req, res) => {
//   res.sendFile(__dirname + "/routes/public/index.html");
// });

// //POST method
// app.post("/notes", (req, res) => {
//   console.log(req.body);
//   res.send(`Note added: {req.body.userInput}`); //or res.json({msg: "Note added"}) (dis methods are used for Frontend)
//   //     const userInput = req.body;
//   // console.log(userInput);
// });

// //cacharra de metodos de ernesto
// // let htmlElement1 = "<h1>add a new note</h1>";
// // let htmlElement2 = "<p>un p</p>";
// // let htmlElement3 = "<p><i>otro p</i></p>";
// // // endpoint for "/dynamic_notes", Get method with dynamically built html content
// // app.get("/dynamic_notes", (req, res) => {

// //     let myHTML = "<html>"+htmlElement1+htmlElement2+"</html>";
// //     res.send(myHTML);
// // });
// // app.get("/dynamic_notes2", (req, res) => {
// //     let myHTML = "<html>"+htmlElement1+htmlElement3+"</html>";
// //     res.send(myHTML);
// // });

// // // endpoint for "/api", Get method with json response
// // app.get("/json_notes", (req, res) => {
// //     let myJson = "{data: 'Hello World'}";
// //     res.send(myJson)
// // });

// // listen to the server
// app.listen(PORT, () => {
//   log(`The app is ready on:\thttp://localhost:${PORT}`);
// });
