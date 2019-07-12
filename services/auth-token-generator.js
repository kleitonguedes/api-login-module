const db = require('../db');

module.exports =  async function(userData) {
    const { id, email, password } = userData;

    // INSERT NO BANCO
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const authToken = {
                id: db.auth_token.length + 1,
                user_id: id,
                status: 'ACTIVE',
                token: JSON.stringify({
                    id: id,
                    email: email,
                    password: password,
                    time: new Date().getTime(),
                    log_action: "login"
                })
            };
            db.auth_token.push(authToken);

            if(true) {
                resolve({
                    status: 'SUCCESS',
                    message: 'Token gerado com sucesso!',
                    token: authToken.token
                });
            } else {
                reject({
                    status: 'ERROR',
                    message: 'Nâo foi possível gerar o token, tente novamente.'
                });
            }
        }, 1000);
    })
    .then(async (tokenSuccess) => {
        return await tokenSuccess;
    })
    .catch(async (tokenError) => {
        return await tokenError;
    });
}