var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];

console.log(tab);
// adding a new element in the array, at in 10
tab[10] = "Element 9";

//display the array in the for loop
console.log("access to each element by a for () loop");
for (var i =0 ; i < tab.length; i++) 
console.log ("tab [" + i + "]", tab [i]);

//display the array by for Each () Method
console.log("Access to each element by the for each method");

tab.forEach(function(elem, i){
console.log("tab[" + i + "]", elem);
})