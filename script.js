// console.log(window);
// window.alert("HELLO");

// console.dir(window);
// console.dir(document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);

// console.dir(document.body.childNodes[1]);
// document.body.childNodes[1].innerText ="ABCD";

// let heading = document.getElementById("heading"); //h1 
// console.dir(heading);


// let headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings);

// let parahs= document.getElementsByTagName("p");
// console.dir(parahs);

// let elements = document.querySelector("p");
// console.dir(elements);

// let firstEl = document.querySelector("p"); //1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); //all element
// console.dir(allEl);

// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

//Q1 Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JSON.

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students"; //concatination

//Q2 Create 3 divs with common class name - "box". Access them & add somme unique text to each of them.

// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// // console.log(divs[0]);
// // divs[0].innerText = "new unique value 1";
// // divs[1].innerText = "new unique value 2";
// // divs[2].innerText = "new unique value 3";
// //this basic but use for of
// let idx = 1;
// for(div of divs){
//     div.innerText = `New unique value ${idx}`;
//     idx++;
// }

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);