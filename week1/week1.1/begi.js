//??1. sum problem
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum += i;
// }
// console.log(sum);

//??2. star printing
// function pattern1(n) {
//   for (let i = 0; i < n; i++) {
//     let spaces = "";
//     for (let j = 0; j < n; j++) {
//       spaces += "*";
//     }
//     console.log(spaces);
//   }
// }
// function pattern2(n) {
//   let spaces = "";
//upper stars
//   for (let i = 0; i < n; i++) {
//     spaces += "*";
//   }
//   console.log(spaces);

// middle stars
//   for (let i = 0; i < n - 2; i++) {
//     spaces = "*";
//     for (let j = 0; j < n - 2; j++) {
//       spaces += " ";
//     }
//     spaces += "*";
//     console.log(spaces);
//   }

// lower stars
//   spaces = "";
//   for (let i = 0; i < n; i++) {
//     spaces += "*";
//   }
//   console.log(spaces);
// }
// pattern1(5);
// pattern2(10);
