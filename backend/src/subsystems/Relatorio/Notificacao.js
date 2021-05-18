const { sendAlert } = require('../../services/SlackAPI')

const ClassNotificacao = class Notificacao {
    constructor() {
        this._mensagem = '';
    }

    async enviar(mensagem) {
        this._mensagem = mensagem
        try {
            await sendAlert(this._mensagem)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ClassNotificacao
