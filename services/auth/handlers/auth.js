const {
    validate,
    Accout,
    AccoutLogin
} = require('../../../pkg/account/validate');
const account = require('../../../pkg/account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../pkg/config');

const login = async (req, res) => {
    try {
        await validate(req.body, AccoutLogin);
        let acc = await account.getByEmail(req.body.email);
        if (!acc) {
            throw {
                code: 404,
                error: 'Account not found'
            };
        }
        if (!bcrypt.compareSync(req.body.password, acc.password)) {
            throw {
                code: 400,
                error: 'Wrong password'
            };
        }
        let payload = {
            firstname: acc.firstname,
            email: acc.email,
            id: acc._id,
            exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60
        };
        let token = jwt.sign(payload, config.get('security').jwt_key);
        return res.status(200).send({ token });
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error)
    }
}

const register = async (req, res) => {
    try {
        await validate(req.body, Accout);
        let exists = await account.getByEmail(req.body.email);
        if (exists) {
            throw {
                code: 400,
                error: 'Account exists'
            };
        }
        req.body.password = bcrypt.hashSync(req.body.password);
        let acc = await account.create(req.body);
        return res.status(201).send(acc);
    } catch (err) {
        console.log(err);
        return res.status(err.code).send(err.error);
    }
};

const refreshToken = async (req, res) => {
    let payload = {
        ...req.user,
        exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60
    };
    let token = jwt.sign(payload, config.get('service').jwt_key);
    return res.send({ token });
};

module.exports = {
    login,
    register,
    refreshToken
}