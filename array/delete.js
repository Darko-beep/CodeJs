var tab = ["Elements 1", "Element 2", "Element 3", "Element 4", "Element 5"];
delete tab[0];
for (i=0; i<tab.length; ++i) {console.log(tab)};

tab.forEach(function(elem,i){
console.log(elem);
});