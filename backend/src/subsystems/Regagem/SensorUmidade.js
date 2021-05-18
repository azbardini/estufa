const ClassSensorUmidade = class SensorUmidade {
    constructor() {
        this._umidade = Math.floor(Math.random() * 100)
    }

    get umidade() {
        return this._umidade;
    }

    set umidade(_) {
        this._umidade = Math.floor(Math.random() * 100)
    }
}

module.exports = ClassSensorUmidade
