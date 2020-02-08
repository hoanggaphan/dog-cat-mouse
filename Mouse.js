class Mouse {
    constructor(name) {
        this.name = name;
        this.isDead = false;
    }
    die() {
        this.isDead = true;
    }
}

Mouse.prototype.run = function () {
    console.log('Run run run!');
}

Mouse.prototype.sleep = function () {
    console.log("Sleep zzZZZZZ");
}

module.exports = Mouse;