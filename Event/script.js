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
// document.addEventListener("DOMContentLoaded", () => {
//     let btn1 = document.querySelector('#btn1');
//     btn1.addEventListener("click", () => {
//         console.log("button1 was clicked - handler1");
//     });

//     btn1.addEventListener("click", (evt) => {
//         console.log("button1 was clicked - handler2");
//         console.log(evt);
//         console.log(evt.type);
//     });
//     btn1.addEventListener("click", () => {
//         console.log("button1 was clicked - handler3");
//     });
//     btn1.addEventListener("click", () => {
//         console.log("button1 was clicked - handler4");
//     });
//     const handler4 = () => {
//         console.log("button1 was clicked - handler4");
//     }

//     btn1.removeEventListener("click", () => {
//         console.log("button1 was clicked - handler3");
//     });
//     btn1.removeEventListener('click', handler4)

// });

// Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
document.addEventListener('DOMContentLoaded', () => { 

    let modeBtn = document.querySelector("#mode");
    let currMode = "light";
    modeBtn.addEventListener("click", () => {
        // console.log("you are trying to change the mode");
        if (currMode === "light"){
            currMode = "dark";
            document.querySelector("body").style.backgroundColor = "black";
        }
        else{
            currMode = "light";
            document.querySelector("body").style.backgroundColor = "white";
        }

        console.log(currMode);
    });
});