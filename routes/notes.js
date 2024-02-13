import express from "express";
import htmlVariables from "./htmlContent.js";

const htmlContent = (req, res) => {
  res.send(htmlVariables.inputNotesSection);
};

const NotesPage = {
  htmlContent,
};

export default NotesPage;
