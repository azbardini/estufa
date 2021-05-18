const express = require('express')
const routes = express.Router()
const cors = require('cors')

const ClassRest = class RestApi {
  constructor(regagem, relatorio) {
    if (!RestApi.instance) {
      this._relatorio = relatorio
      this._regagem = regagem

      this._app = express()
      this._port = process.env.port || 3060
      this._app.use(cors())
      this._app.use(express.json())
      this._app.use(routes)
      this._app.listen(this._port, this.startupMessage())

      this.openRoutes()

      RestApi.instance = this;
    }
    return RestApi.instance;
  }

  openRoutes() {
    console.log('Opening routes')
    routes.get('/relatorios/', this._relatorio.buscaRelatorios)
    routes.get('/regas/', this._regagem.buscaRegas)
    routes.post('/regas/', this._regagem.salvaRegas)
  }

  startupMessage() {
    console.log(`Estufa v1, running on port ${this._port}`)
  }
}

module.exports = ClassRest

