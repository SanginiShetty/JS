// console.log("Hello");    //function => log()

// "abc".toUpperCase()      //function => toUpperCase()

// [1, 2, 3].push(4);       //function => push()

// //Basic function initialization and calling
// function myFunction() {
//     console.log("Welcome to Studying Coding");
//     console.log("WE ARE LEARNING JS :)");
// }

// myFunction();
// myFunction(); //Printing it two times


// function myFunction(msg) {
//     //parameter -> function input
//     console.log(msg);
// }
// myFunction(); //Undefined
// //with argument
// myFunction("I love JS");  //I love JS
// myFunction("I love JS", 100); //NaN => Not a number

//Function -> 2 numbers, sum
// function sum(x, y) {
//     console.log(x + y);
// }

// sum(10, 29);

// function sum(x, y) {
//     //x and y will act as a local variable -> scope
//     s = x + y;
//     console.log("Before returrn");
//     return s; //rweturn will return only one value
//     // console.log(s); //this will not execcute because it is after return statement
// }

// ////sum(10,30); //will not return any value since there is no console.log
// let val = sum(10, 30);
// console.log(val);

//sum function
// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

//multiplication function
// function mul(a, b) {
//     return a * b;
// }

// let arrowMul = (a, b) => {
//     console.log(a * b);
// }; // call by using arrowMul(3,4)

// arrowMul = 5;

// const printHello = () => {
//     console.log("Hello there!")
// }

// const printHello = () => console.log("Hello there!");


//Q1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// function countVowels(str) {
//     //"Sangini", count 3
//     let count =0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u"){
//             count++;
//         }
//     } 
//     console.log("Number of vowels =", count);   // return count;
// };

//Q2 Create an arrow function to perform the same task.

// const countVowels = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         } 
//     }
//     return count;
// };

//forEach method
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) { //value at each index
//     console.log(val);

// });
// let arr = ["mumbai", "delhi", "pune"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

//Q3. For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val * val);
// });

// let nums = [67, 52, 39];

// let calcSquare =(num) => {
//     console.log(num**2);
// };
// nums.forEach(calcSquare);

// //MAP method
// let nums =[67, 52, 39];

// nums.map((val) => {
//     console.log(val);
// });

// let newArray = nums.map((val) =>{
//     return val * val;
// });


// console.log(newArray);

//Filter Array Method

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) =>{
//     return val > 3;
// });

// console.log(evenArr);

// Reduce array method

// let arr =[1, 2, 3, 4];

// const output = arr.reduce((result, current) => {
//     return result + current;
// });
// console.log(output);//10

// let arr = [5, 6 ,1, 8, 2, 4];

// const output = arr.reduce((prev, current) => {
//     return prev > current ? prev : current;

// });

// console.log(output);//8

// //Q4. We are given array of marks of students. Filter out of the marks of students that scored 90+.

// let arrMarks = [97,62,55,80,91,99,50];

// const toppers = arrMarks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

// //Q5. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

// let n = prompt("Enter a number:");

// let arr = []; //array initialization
// for(let i=1 ;i<=n;i++){
//     arr[i-1]=i; //1(0), 2(1), 3(2)
// }

// console.log(arr);

// const sumArr = arr.reduce((res, curr) => {
//     return res+curr;
// });

// console.log("Sum =", sumArr);

// const prodArr =arr.reduce((res, curr) => {
//     return res*curr;
// });

// console.log("Factorial =", prodArr);