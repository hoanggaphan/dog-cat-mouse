export default class Mouse {
    constructor(name) {
        this.name = name;
        this.dead = false;
    }
    die() {
        this.dead = true;
    }
}