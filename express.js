// app.js
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;


// 1st question
app.get("/", (req, res) => {
  res.send("Hello Express");
});


// 2nd question
/*app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});*/


// 3rd question
/*app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});*/


// 4th question
app.get("/data", (req, res) => {
  res.send("GET request received");
});

app.post("/data", (req, res) => {
  res.send("POST request received");
});

app.put("/data", (req, res) => {
  res.send("PUT request received");
});

app.delete("/data", (req, res) => {
  res.send("DELETE request received");
});


// 5th question
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});*/


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
