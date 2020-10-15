const UserModel = require( '../models/users.model' );

/**
 * Will save the user to mondodb
 * 
 * @param {*} userData user
 * @returns promise
 */
const create = userData => {

    const userModel = new UserModel( userData );

    return userModel.save();
}

module.exports = {
    create,
}