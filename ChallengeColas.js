//Define class Person and the constructor
class person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }

 //Define class personQueue and the constructor with the differents functions that you can see.   

}

class personQueue {
    constructor(){
        this.person = [];
    }

    enqueue(person) {
        this.person.push(person);
        return this.person
    }
    
    dequeue() {
        return this.person.shift();
    }
    
    peek() {
        return this.person[0];
    }
    
    size() {
        return this.person.length;
    }

    isEmpty() {
        return this.person.length === 0;
    }
    
    print() {
        console.log(this.person);
    }

}

const person1 = new person("Juan Bohorquez","8:00 AM")
const person2 = new person("Daniel Suarez", "9:00 AM")

const queue = new personQueue();
queue.enqueue(person1);