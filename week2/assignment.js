function sagar(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const parser = require("body-parser");
const port = 2000;

//?? passing as query in url only
// http://localhost:2000/query?counter=30
// app.get("/query", (req, res) => {
//   let value = req.query.counter;
//   let answer = sagar(value);
//   res.send(`your sum is ${answer}`);
// });

//?? passing as headers from postman
// app.post("/headers", (req, res) => {
//   let value = req.headers.counter;
//   let answer = sagar(value);
//   res.send(`answer is ${answer}`);
// });

//?? passing counter in body and we stract it so for it we use body parser

// app.use(parser.json());

app.get("/body", (req, res) => {
  let sagar = {
    name: "sgaar",
  };
  res.send(sagar);

  // let value = req.body.counter;
  // let answer = sagar(value);
  // let sagarrr = {
  //   name: "sgaar",
  // };
  // res.send(sagarrr);
  // res.status(404).send(`sagar ${answer}`);
});

app.listen(port, () => {
  console.log("haan bhai chalu hai jo karna hai kar");
});

//?? server talking to server
