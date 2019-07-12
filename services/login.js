const { User } = require('../models');
const bcrypt = require('bcrypt');
const authTokenGenerator = require('./auth-token-generator');

module.exports =  async function(userData) {
    const { email, password } = userData;

    return User.findAll({
        where: {
            email
        }
    })
    .then(async (loginSuccess) => {
        const cryptPassword = loginSuccess[0].dataValues.password;

        if( bcrypt.compareSync(password, cryptPassword) ) {
            // return await authTokenGenerator(loginSuccess[0]);
            return {
                status: "SUCCESS",
                message: 'Login realizado com sucesso.',
                token: '1j23k52h35p325p23p56hp75p'
            }
        } else {
            throw null
        }
    })
    .catch(async (loginError) => {
        console.log(loginError);
        return {
            status: "ERROR",
            message: 'Não foi possível realizar o login'
        }
        // return await loginError;
    });
}