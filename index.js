
// coman js syntx
// const utiles_file = require('./utiles');

// // console.log(`Random number : ${generateRandomNumber}`);
// // console.log(`Random number : ${generateRandomNumber()}`);
// // console.log(utiles);

// const generateRandomNumber = utiles_file.generateRandomNumber;
// console.log(`Random number is ${generateRandomNumber()  }`);
// console.log(`Random number is ${utiles_file.celciusToFahrenheit(32)}`);

// module syntx

// the below line of code is for just importing the getPost from postController.js
import { getPost } from "./postController.js";
// the below line of code is for importing everything which is exported from postController.js
import * as postController from "./postController.js";
console.log(getPost());
// console.log(postController.getPost());