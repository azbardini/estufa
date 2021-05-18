const { CronJob } = require('cron')
const ArCondicionado = require('./ArCondicionado')
const Termometro = require('./Termometro')

const ClassVentilacao = class Ventilacao {
    constructor() {
        this._arCondicionado = new ArCondicionado('desligado')
        this._termometro = new Termometro()

        this._ventilacaoScheduler = new CronJob('* * * * *', () => this.controlar(), null, true, 'America/Sao_Paulo');
        this._ventilacaoScheduler.start();
    }

    controlar() {
        console.log('Executando controlador de ventilação.')
        if (this._termometro.temperatura < 25) {
            this._arCondicionado.desligar()
        }
        if (this._termometro.temperatura > 30) {
            this._arCondicionado.ligar()
        }
    }

    status() {
        return ({
            arCondicionado: this._arCondicionado.estado,
            termometro: this._termometro.temperatura
        })
    }
}

module.exports = ClassVentilacao
