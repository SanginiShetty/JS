document.addEventListener('DOMContentLoaded', () => {
    let btn1 = document.querySelector("#btn1");
    
    btn1.addEventListener("click", (event) => {
        console.log("btn1 was clicked");
        let a = 25;
        a++;
        console.log(a);
    });
});