// filter callback 
var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", ];

console.log ("inital tab = " + tab);

//keep only items with index >2 
tab = tab.filter(function(elem,i){
    if (i >= 2) return true; //keep this element
});

console.log ('final tab = ' + tab );


//Map Callback
var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", ];

console.log("initial tab = " + tab );

// capitalize all elements 
tab = tab.map(function(elem,i){
    return elem.toUpperCase();
});

console.log ("modified using the map method = " + tab );
