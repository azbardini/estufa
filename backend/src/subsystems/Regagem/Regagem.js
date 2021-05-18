const { CronJob } = require('cron')
const { firebase } = require('../../../src/services/Firebase')

const Regador = require('./Regador')
const SensorUmidade = require('./SensorUmidade')

const ClassRegagem = class Regagem {
    constructor() {
        this._regador = new Regador()
        this._sensorUmidade = new SensorUmidade()

        this._regagemScheduler = new CronJob('* * * * *', () => this.controlar(), null, true, 'America/Sao_Paulo');
        this._regagemScheduler.start();
    }

    controlar() {
        const date = new Date()
        const weekDay = date.getDay() - 1
        const hour = date.getHours()
        firebase.database().ref('agenda/').once('value', snap => {
            const regas = snap.val()
            if (regas[weekDay][hour] === 'on') {
                this._regador.regar()
            }
        })
    }

    status() {
        return ({
            regador: this._regador.ultima,
            umidade: this._sensorUmidade.umidade
        })
    }

    async salvaRegas(req, res) {
        const body = req.body || null
        if (body.agenda) {
            firebase.database().ref('agenda/').set(body.agenda)
        }
        return res.status(200).json()
    }

    async buscaRegas(req, res) {
        firebase.database().ref('agenda/').once('value', snap => {
            const regas = snap.val()
            if (regas) {
                return res.status(200).json(regas)
            } else {
                return res.status(404)
            }
        }).catch(() => {
            return res.status(404)
        })
    }

}

module.exports = ClassRegagem
