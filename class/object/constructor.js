class Person {
    // class properties 
    lastname = '';
    firstname = '';
    age = 0;

    // class methods
    constructor (lastname, firstname,age){
            this.lastname = 'Clinton';
            this.firstname = 'Bill';
            this.age = age;
    }
    display (){
        console.log(" the person's lastname = " + this.lastname + ", firstname = " + this.firstname);
    }
}

var p = new Person;
console.log("variable p = " , p);
p.display(); // use of the display method of the class. 
