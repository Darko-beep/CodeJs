// array 
var tab = ["Elements 1", "Element 2", "Element 3", "Element 4", "Element 5"];

//remove 1 element from the index 
tab.splice(0,1);
console.log(tab);

//for loop
console.log("For loop");
for (var i=0 ; i < tab.length ; i++) {
    console.log(i + ": "+ tab[i]);
};

// for each loop 
console.log ("For Each loop"); 
    tab.forEach((element) => {console.log(element)});


    // filtering elements in an Array 
    console.log (tab);

    //keep only items with index >=2
    tab=tab.filter(function (element,index){
        if (index >= 2) return true;
    });
    console.log (tab);



    //capitalize all elements 
    tab = tab.map(function(element, index){
        return element.toUpperCase();
    });
    console.log (tab);

