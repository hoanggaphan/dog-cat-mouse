const Cat = require("./Cat.js");
const Mouse = require("./Mouse.js");
const Dog = require("./Dog.js");

const mouse = new Mouse("mickey");
const cat = new Cat();
const dog = new Dog();
try {
    cat.eat(mouse);
    console.log(cat);
} catch (error) {
    console.log("Error while cat eating a dog");
}