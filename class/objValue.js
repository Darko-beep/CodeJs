class Person {
    // class properties 
    lastname = '';
    firstname = '';
    age = 0;

    display (){
        console.log(" the person's lastname = " + this.lastname + ", firstname = " + this.firstname);
    }
}

var p = new Person ;
p.lastname = "clinton"; // initialization of the lastname 
// property of the object p

p.firstname = "bill"; // initialization of the firstname 
// property of the object p

console.log("variable p = " , p);
p.display(); // use of the display method of the class. 

