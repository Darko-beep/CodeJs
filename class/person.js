class Person {
    // define the Person class 
    firstname ='';
    lastname ='';
    age = 0; 
 
 // class methods 
 display () {
    console.log ("The person's lastname is = " + this.lastname + ", firstname = " + this.firstname ); 
 }
 }
 //create an object of class Person
 
 var p = new Person;
 console.log("variable p = " , p);
 p.display(); // use of the display method of the class. 