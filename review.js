function _Person(name, age) {
    this.name = name;
    this.age = age;
}

// _Person.prototype.print = function () {
//     console.log(this.name + " is " + this.age + " years old.")
// }

function _Student(name, age, major) {
    this.person = new _Person(name, age);
    this.major = major;
}
_Student.prototype.print = function () {
    console.log(this.person.name + " is a " + this.person.age + " year old " + this.major + " student.")
}

var Lana = new _Student("Lana", 4, "Doggy day camp")
console.log(Lana)
// Lana.print()

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

    print(){
        console.log(this.name + " is a " + this.age + " year old " + this.major + " student.")
    }
}

var Ben = new Student("Ben", 31, "CS")

 console.log(Ben)
// Ben.print()