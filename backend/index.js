require('dotenv').config()
const { ClassMain } = require('./src/subsystems/Controle/Main')
const { initializeFirebase } = require('./src/services/Firebase')
initializeFirebase()

const Main = new ClassMain()
