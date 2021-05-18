const ClassCamera = class Camera {
    constructor() {
        this._imagens = [];
    }

    get imagens() {
        return this._imagens
    }

    captura() {
        this._imagens.push('imagem')
    }
}

module.exports = ClassCamera
