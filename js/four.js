// let marks = {
//     stud1: 97,
//     stud2: 82
// };//Very tedious therefore we use array

// let marks = [97,64,82,45,36];
// console.log(marks);
// console.log(marks.length);

// let heroes =["ironman", "thor", "batman", "superman", "hulk", "spiderman"];
// console.log(heroes[0]);
// console.log(heroes[1]);
// console.log(heroes[2]);
//Alternative for printing each elements separately
//for loop
// for(let i = 0; i<heroes.length ; i++){
//     console.log(heroes[i]);
// } 

// //for of
// for(let i of heroes) {
//     console.log(i);
// }

// let cities = ["delhi", "mumbai", "noida", "mangalore", "bangalore", "hyderabad"];

// for(let city of cities) {
//     console.log(city.toUpperCase());
// }

//Q1. for a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
// let marks = [85, 97, 44, 37, 76, 60];
// let avgMarks;
// let totalMarks = 0;
// for(let i = 0; i < marks.length; i++){
//     totalMarks = totalMarks + marks[i];
// }
// avgMarks = totalMarks/marks.length;
// console.log("Average marks:", avgMarks);

//Q2. For a given array the prices of 5 items -> [250, 645, 300, 900, 50]. All items have have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let price = [250, 645,300, 900, 50];
// for(let i = 0; i < price.length; i++){
//     price[i] = price[i] - price[i]*(10/100);
//     console.log(`Price after applying 10% off ${price[i]}`);
// }

//push array and pop array
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted", deletedItem);
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

//Converting array to string
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems.toString());
// let marks = [97, 45, 89];
// console.log(marks.toString());

//concat string, unshift, shift
// let marvelHeroes = ["thor", "spiderman", "ironman" ];
// let dcHeroes =["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);

// marvelHeroes.unshift("antman");// add to start
// marvelHeroes.shift();//removes from start

// let marvelHeroes = ["thor", "spiderman", "ironman", "antmman", "Dr. Strange"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1,2));//(1, 7-1) //(1)=> prints everything

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2, 5, 101, 102, 103);
//Add Element using splice
// arr.splice(2, 0, 101);

//Delete Element using splice
// arr.splice(3,1);

//Replace Element using splice
// arr.splice(3, 1, 101);



//Q1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "netflix"
//a. Remove the first company from the array 
//b. Remove Uber & Add Ola in its place
//c. Add Amazon aat the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1, 1, "Ola");
// console.log(companies);
// companies.splice(5,0,"Amazon");
// console.log(companies);

