const { firebase } = require('../../services/Firebase')
const Notificacao = require('./Notificacao');

const ClassRelatorio = class Relatorio {
    constructor(iluminacao, regagem, ventilacao, visao) {
        this._statusIluminacao = iluminacao;
        this._statusRegagem = regagem;
        this._statusVentilacao = ventilacao;
        this._statusVisao = visao;
        this._notificacao = new Notificacao();
    }

    gerar() {
        const relatorio = {
            data: Date.now(),
            iluminacao: this._statusIluminacao,
            regagem: this._statusRegagem,
            ventilacao: this._statusVentilacao,
            visao: this._statusVisao,
        }
        firebase.database().ref(`relatorios/${relatorio.data}`).set(relatorio).then(async () => {
            console.log('Relatório Gerado')
            if (this._statusVisao.processamento.fogo === 'sim' || this._statusVisao.processamento.corPlantas === 'marrom') {
                try {
                    this._notificacao.enviar(relatorio)
                } catch (error) {
                    console.log(error)
                }
            }
        }).catch(error => {
            console.log(error)
        })
    }

    async buscaRelatorios(req, res) {
        firebase.database().ref('relatorios').once('value', snap => {
            const relatorios = snap.val()
            if (relatorios) {
                return res.status(200).json(relatorios)
            } else {
                return res.status(404)
            }
        }).catch(() => {
            return res.status(404)
        })
    }

}

module.exports = ClassRelatorio
