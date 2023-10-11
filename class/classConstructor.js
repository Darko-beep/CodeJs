class Person{
    firstname ="";
    lastname ="";
    age=0;


    constructor(lastname, firstname, age){
        this.firstname= lastname;
        this.lastname= firstname;
        this.age= age;
    }

    display () {
        console.log("The first name and Last name are " + this.firstname + " and " + this.lastname);
    }
}

var p = new Person("Darko", "Frederick", 31);
console.log("variable p = " , p);

p.display();