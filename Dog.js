const chalk = require("chalk");

class Dog {
    constructor(name) {
        this.name = name;
        this.stomach = [];
    }
    eat(cat) {
        this.stomach.push(cat)
    }
    run() {
        console.log("fast very fast");
    }
    sayHi() {
        console.log("Hi! I am a dog. My name is " + chalk.blue(this.name));
    }
}

module.exports = Dog;