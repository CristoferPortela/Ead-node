const usersRepository = require("../repositories/users.repository");

/**
 *  Rota que cria um novo usuário no mongodb
 * 
 * @param {object} req requisição recebida
 * @param {object} h resposta http
 */
const create = async ( req, h ) => {

    const user = await usersRepository.create( req.payload );

    return h.response( user ).code( 201 );
}; 

module.exports = {
    create,
}