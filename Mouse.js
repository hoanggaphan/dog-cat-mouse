export default class Mouse {
    constructor(name) {
        this.name = name;
        this.isDead = false;
    }
    die() {
        this.isDead = true;
    }
}