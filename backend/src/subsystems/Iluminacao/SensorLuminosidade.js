const ClassSensorLuminosidade = class SensorLuminosidade {
    constructor() {
        this._luminosidade = Math.floor(Math.random() * 20000)
    }

    get luminosidade() {
        return this._luminosidade;
    }

    set luminosidade(_) {
        this._luminosidade = Math.floor(Math.random() * 20000)
    }
}

module.exports = ClassSensorLuminosidade
