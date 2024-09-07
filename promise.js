const promise = new Promise (function(resolve, reject) {
const num = Math.floor(Math.random()*10);
console.log(num);
if(num > 5){
resolve();
}
else{
reject();
}
});
 
promise.then(function() {
console.log("TRUE");
});
promise.catch((error) => {
console.log("FALSE");
});