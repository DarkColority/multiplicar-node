const options = {
    base: {
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea una nueva tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}