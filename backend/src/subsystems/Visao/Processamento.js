const ClassProcessamento = class Processamento {
    constructor(image) {
        this.image = image;
    }

    geraDados() {
        const coresOpts = ['verde', 'amarelo', 'marrom']
        const fogoOpts = ['sim', 'não']

        return ({
            corPlantas: coresOpts[Math.floor(Math.random() * 3)],
            quantidadeDePlantas: Math.floor(Math.random() * 10),
            fogo: fogoOpts[Math.floor(Math.random() * 2)],
        })
    }
}

module.exports = ClassProcessamento
