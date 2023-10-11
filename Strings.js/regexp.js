// modifying a character string 
var s = "Hello";

console.log ("s = ", s );

// search for "Hel"
console.log (`s.match(/Hel/) = ${s.match(/Hel/)}`);

// search for hel ignoring both upper and lower cases 
console.log (`s.match(/hel/i) = ${s.match(/hel/i)}`);

// search for H followed by a or b or e followed by 1
console.log (`s.match(/H[abe]1/) = ${s.match(/H[abe]1/)}`);

// search for He followed 1 (min) to 2 (max) followed by 1 
console.log (`s.match(/Hea{1,2}1/) = ${s.match(/Hea{1,2}1/)}`);

// search for He followed by 0 or 1 a followed by 1 
console.log (`s.match(/Hea?1/) = ${s.match(/Hea?1/)}`);