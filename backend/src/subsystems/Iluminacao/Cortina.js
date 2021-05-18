const ClassCortina = class Cortina {
    constructor(estado) {
        this._estado = estado;
    }

    get estado() {
        return this._estado
    }

    abrir() {
        console.log('Abrindo cortinas')
        this._estado = 'aberto';
    }

    fechar() {
        console.log('Fechando cortinas')
        this._estado = 'fechado';
    }
}

module.exports = ClassCortina
