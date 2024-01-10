//?? assignment
let store = [
  {
    id: 1,
    title: "sagar",
    description: "kya baat hai",
  },
  {
    id: 2,
    title: "sagar",
    description: "kya baat hai",
  },
];

const express = require("express");
const app = express();
const port = 8000;

app.get("/todos", (req, res) => {
  res.send(store);
});

app.get("/todos/id", (req, res) => {
  res.send(store.id);
});

app.listen(port, () => {
  console.log("chaliye shuru karte hai");
});
