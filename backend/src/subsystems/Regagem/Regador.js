const ClassRegador = class Regador {
    constructor() {
        this._ultima = null;
    }

    regar() {
        console.log('Regando plantas.')
        this._ultima = Date.now()
    }

    get ultima() {
        return this._ultima
    }
}

module.exports = ClassRegador
