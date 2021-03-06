const usersHandler = require("../handlers/users.handler");
const usersSchema = require("../schemas/users.schema");

module.exports = [
    {
        method: 'POST',
        path: '/users',
        handler: usersHandler.create,
        options: {
            validate: {
                payload: usersSchema
            }
        }
    }
]