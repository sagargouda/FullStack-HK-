//?? lesssgo

//?? write a backend server

// function sum(c) {
//   let count = 0;
//   for (let i = 0; i <= c; i++) {
//     count += i;
//   }
//   return count;
// }
// var cal = sum(100);
// console.log(cal);

// const express = require("express");
// const app = express();
// const port = 4000;

// app.get("/", (req, res) => {
//   let answer = "sum is " + cal;
//   res.send(answer);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//?? counter

// function sum(end) {
//   let sum = 0;
//   for (let i = 0; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let answer = sum(100);
// console.log(answer);

// const expressss = require("express");
// const myApp = expressss();
// const ports = 4000;

// myApp.listen(ports, () => {
//   console.log("haan bhai tu bhi exist karta hai bas na " + ports);
// });

// myApp.get("/sagar", (req, res) => {
//   //?? req is request and res is response
//   let dynamic = req.query.end;
//   let expressAnswer = sum(dynamic);

//   let answer = `the dynamic answer is ${expressAnswer}`;
//   res.send(answer);
// });
// //?? this is how url looks , it also works ith numbers
// // http://localhost:4000/sagar
// //http://localhost:4000/sagar?end=40

// //?? posting now

// myApp.post("/post", (req, res) => {
//   res.send("heya sgaar");
// });

// //??Putting now

// myApp.put("/put", (req, res) => {
//   res.send("wanna put");
// });

//!! Week 2.2

//?? revision of previous class and new addition

// function sum(counter) {
//   let sum = 0;
//   for (let i = 0; i <= counter; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const express = require("express");
// const bodyparse = require("body-parser");
// const app = express();

// const port = 5000;

//?? registering a middlewqare
// app.use(middleware1);
// app.use(bodyparse.json());

// app.get("/", (req, res) => {
//   let counter = req.query.counter;
//   console.log(counter);

//   if (counter < 10000) {
//     let calculateSum = sum(counter);
//     //?? response body
//     let answerObject = {
//       sum: calculateSum,
//     };

//     res.send(answerObject);
//   } else {
//     res.status(411).send("that is a big number");
//   }
// });

// app.listen(port, () => {
//   console.log("Haan bhai tuu port bhi zinda hai ");
// });

// function middleware1(req, res, next) {
//   console.log("from middleware");
//   console.log(req.headers.counter);
//   next();
// }
