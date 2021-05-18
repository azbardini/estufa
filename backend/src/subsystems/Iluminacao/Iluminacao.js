const { CronJob } = require('cron')
const Cortina = require('./Cortina')
const SensorLuminosidade = require('./SensorLuminosidade')

const ClassIluminacao = class Iluminacao {
    constructor() {
        this._cortina = new Cortina('aberto')
        this._sensorLuminosidade = new SensorLuminosidade()

        this._iluminacaoScheduler = new CronJob('* * * * *', () => this.controlar(), null, true, 'America/Sao_Paulo');
        this._iluminacaoScheduler.start();
    }

    controlar() {
        console.log('Executando controlador de luminosidade.')
        if (this._sensorLuminosidade.luminosidade > 15000) {
            this._cortina.fechar()
        }
        if (this._sensorLuminosidade.luminosidade < 10000) {
            this._cortina.abrir()
        }
    }

    status() {
        return ({
            cortina: this._cortina.estado,
            luminosidade: this._sensorLuminosidade.luminosidade
        })
    }
}

module.exports = ClassIluminacao
