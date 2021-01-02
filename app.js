const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]
let base = argv.base;
let limite = argv.limite;

switch ( comando ) {
  case 'crear':
    crearArchivo(base, limite)
      .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
      .catch(e => console.log(e))
    break

  case 'listar':
    listarTabla(base, limite);
    break;

  default:
    console.log('Comando no reconocido')
}
