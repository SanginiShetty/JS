// for(let count =1; count<=5; count++){
//     console.log("Hello World");
// }
// console.log("Loop has ended");

//Calculate sum of 1 to 100

// let sum = 0;
// let n = 100;
// for(let i=1; i <=n; i++){
//     sum = sum + i;
// }
// console.log("Sum =", sum);
// console.log("Loop ended");

// for(let i = 1;i <= 5; i++){
//     console.log("i =", i);
// }
// console.log(i);//out of scope

// for(var i = 1;i <= 5; i++){//var is defined
//     console.log("i =", i);
// }
// console.log(i);

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }

// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i <= 10);

// let str = "Vidyavardhini";
// let size = 0;
// for(let i of str){//iterator -> characters
//     console.log(i);
//     size++;
// }
// console.log("Size of the String:",size);

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 8.95,
//     isPass: true
// };

// for(let i in student){
//     console.log(i);// returns key
//     console.log("key=",i, "value=", student[i]); 
// }

//Print all even numbers from 0 to 100.

// for(let i= 0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log(i);   
//     }

// }

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;

// let guessNum = prompt("Guess the game number: ");

// while(guessNum != gameNum){
//     guessNum = prompt("You have entered the wrong number. Guess again: ");//prompt returns string therefore we should use == not ===
// }

// console.log("Congratulation you guessed the right number");

// // Template literals
// let specialString =`This is a template literal ${1+2+3}`;
// console.log(specialString);
// console.log(typeof specialString);

// let obj = {
//     item:"pen",
//     price: 10
// };

// console.log("The cost of",obj.item,"is",obj.price,"rupees");
// //Template literals
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

//escape chaacters

// console.log("Sangini\nJayaram\nShaila\nSohan");
// console.log("Sangini\tJayaram\tShaila\tSohan");
// let str ="Sangini\tJayaram\tShaila\tSohan";//28
// console.log(str.length);

// let str = "ApnaCollege";
// console.log(str.toUpperCase());

// let str = "0123456789";
// console.log(str.slice());

// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2);//String method
// let res1 = str2.concat(str1);
// console.log(res);
// console.log(res1);
// let res2 = str1 + str2;//Addition of two strings without using String methods (Sting concatenation)
// console.log(res2);

// //str.replace(searchVal, newVal)
// let str = "Hellow";
// console.log(str.replace("H", "Y"));
// console.log(str.replace("low", "p"));

// let str1 = "hellololololo";
// console.log(str1.replaceAll("lo","p"));

//str.charAt(index)
// let str = "IloveJS";
// console.log(str.charAt(3)); //v

//Q1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending eith the fullname length.
// let pop = prompt("Enter your fullname without spaces: ");
// pop = pop.toLowerCase();
// let str1 = "@";
// let str2 = pop.length;
// let output = str1 + pop + str2;
// console.log(output);