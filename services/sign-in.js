const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports =  async function(signInData) {
    const {name, email, password} = signInData;
    
    return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    })
    .then((createResponse) => {
        return {
            status: 'SUCCESS',
            message: 'Usuário cadastrado com sucesso.'
        }
    })
    .catch((createErrorResponse) => {
        return {
            status: 'ERROR',
            message: 'Não foi possível realizar o seu cadastro.'
        }
    });

}