const axios = require('axios')

const slackHook = process.env.slackHook

const SlackAPI = axios.create({
  baseURL: `${slackHook}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

async function sendAlert(message) {
  if (message) {
    await SlackAPI.post('', {
      icon_emoji: ':rotating_light:',
      text: `Novo Alerta!\n`
        + '```\n'
        + `${JSON.stringify(message, null, 2)}`
        + '\n```',
    })
  }
}

module.exports = {
  sendAlert,
}
