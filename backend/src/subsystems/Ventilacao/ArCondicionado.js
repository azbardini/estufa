
const ClassArCondicionado = class ArCondicionado {
    constructor(estado) {
        this._estado = estado;
    }

    get estado() {
        return this._estado
    }

    ligar() {
        console.log('Ligando Ar Condicionado')
        this._estado = 'ligado';
    }

    desligar() {
        console.log('Desligando Ar Condicionado')
        this._estado = 'desligado';
    }
}

module.exports = ClassArCondicionado
