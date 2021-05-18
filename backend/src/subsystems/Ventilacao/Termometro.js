
const ClassTermometro = class Termometro {
    constructor() {
        this._temperatura = Math.floor(Math.random() * 10 + 20)
    }

    get temperatura() {
        return this._temperatura
    }

    set temperatura(temperatura) {
        this._temperatura = temperatura
    }
}

module.exports = ClassTermometro
