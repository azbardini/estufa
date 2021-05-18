const Camera = require('./Camera')
const Processamento = require('./Processamento')

const ClassVisao = class Visao {
    constructor() {
        this._camera = new Camera()
        this._processamento = new Processamento()
    }

    status() {
        return ({
            camera: this._camera.imagens.length,
            processamento: this._processamento.geraDados()
        })
    }
}

module.exports = ClassVisao
