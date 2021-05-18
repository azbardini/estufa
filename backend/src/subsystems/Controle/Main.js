const CronJob = require('cron').CronJob;
const Ventilacao = require('../Ventilacao/Ventilacao')
const Regagem = require('../Regagem/Regagem')
const Iluminacao = require('../Iluminacao/Iluminacao')
const Relatorio = require('../Relatorio/Relatorio')
const Visao = require('../Visao/Visao')
const RestApi = require('./Rest')

const ClassMain = class Main {
  constructor() {
    this._iluminacao = new Iluminacao()
    this._regagem = new Regagem()
    this._ventilacao = new Ventilacao()
    this._visao = new Visao()

    this._rest = new RestApi(this._regagem, new Relatorio())
    Object.freeze(this._rest);

    this.startCron()
  }

  looper() {
    const relatorio = new Relatorio(
      this._iluminacao.status(),
      this._regagem.status(),
      this._ventilacao.status(),
      this._visao.status()
    )
    relatorio.gerar()
  }

  startCron() {
    const notificationScheduler = new CronJob('* * * * *', () => this.looper(), null, true, 'America/Sao_Paulo');
    notificationScheduler.start();
  }
}


module.exports = {
  ClassMain
}
