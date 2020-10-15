/**
 * Bonjour! Aqui é onde toda a api vai iniciar
 */

require( 'dotenv-safe' ).config();
const server = require('./server');
require( './services/mongo.service' );

/**
 * Iniciando nossa aplicação, aqui é a função principal do hapi
 */
const init = async () => {


   server.route({
      method: 'GET',
      path: '/',
      handler: () => 'Hello World!',
   });

   await server.start();
   console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
   console.log(err);
   process.exit(1);
});

init();
