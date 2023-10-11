// accessing characters in a string 
var s = "hello";

console.log("s = ", s );
for ( var i=0;i<s.length;++i ) {
    console.log( "character at position", i, "=", s[i] ); // prints out each character of the string one by one
}

console.log ("using the backticks");
for (var i = 0  ;i < s.length ; i++){
    console.log (` s.charAt(${i}) : ${s.charAt(i)}`);
}