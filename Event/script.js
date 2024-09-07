// document.addEventListener('DOMContentLoaded', () => {
//     let btn1 = document.querySelector("#btn1");
    
//     btn1.onclick = () => {
//         console.log("btn1 was clicked");
//         let a = 25;
//         a++;
//         console.log(a);
//     };


// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("your inside div");
// }
// });
// document.addEventListener('DOMContentLoaded', () => {   
//     let btn1 = document.querySelector("#btn1");

//     btn1.onclick = (evt) => {
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//         console.log(evt.clientX, evt.clientY);//its positon on the screen
//     };

//     let div = document.querySelector("div");
//     div.onmouseover = (evt) => {
//         console.log(evt);
//         console.log(evt.target);
//         console.log(evt.type);
//         console.log(evt.clientX, evt.clientY);
//     };
// });
document.addEventListener("DOMContentLoaded", () => {
    let btn1 = document.querySelector('#btn1');
    btn1.addEventListener("click", () => {
        console.log("button1 was clicked");
    });
});


