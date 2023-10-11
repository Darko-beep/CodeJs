function add_N_first_integers(n) {
    var total = 0;
    for (var i=0; i <= n; i++) total += i;

    return total;
}

// function call 
var total = add_N_first_integers(10);
console.log("Total of the first N intgers is " + total);