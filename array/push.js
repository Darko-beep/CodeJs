var tab =["element 1","element 2","element 3","element 4","element 5",];

tab.push("Element 6"); // inserting the element using the push() Method 
console.log(tab);


//display the array with a for () loop
console.log("Access to each element using the for loop");
for(var i=0; i < tab.length; i++);
console.log("list of elements in an Array", tab);

//for Each loop 
console.log ("For Each Method");
tab.forEach(function(elem, i){
    console.log("tab[ " + i + "] =", elem);
});
