function Horse() {   
}

Horse.prototype.jump = function () {
    console.log("Jumped...")
}

Horse.prototype.run = function () {
    console.log("Running!");
}

module.exports = Horse;