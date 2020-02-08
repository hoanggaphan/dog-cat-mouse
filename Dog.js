const chalk = require("chalk");

class Dog {
    constructor(name) {
        this.name = name;
        this.stomach = [];
    }
    eat(cat) {
        this.stomach.push(cat)
    }
    sayHi() {
        console.log("Hi! I am a dog. My name is " + chalk.blue(this.name));
    }
}

module.exports = Dog;