// before setTimeout
console.log('Before setTimeout ()');

setTimeout(function(){
console.log("in the callback function");
}, 5000); // 5000 miliseconds or 5 seconds

console.log('After SetTimeout');


