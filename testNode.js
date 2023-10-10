/*console.log("This is a message displayed by javascript");

var a = 12;
var b = 56;
var c = a + b;
var firstname = "Bill";
var s1 = "My name is  ";

// console messages 
console.log("a + b = " + a + b);
console.log("c = " + c);
console.log(s1 + firstname);
*/
        
var a = 12;
if (true ) {
    // always executed (because always true)
    var b = 56;
    let c = 89;

    console.log("in the brace:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
}

    console.log("after the brace:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);

    // we have define the variable "a" outside any braces this variable
    // be accessible everywhere