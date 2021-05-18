

const firebase = require('firebase');

const dev = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
}

function initializeFirebase() {
    console.log('Running Database')
    firebase.initializeApp(dev)
}

module.exports = {
    firebase,
    initializeFirebase
}