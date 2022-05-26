const { Validator } = require('node-input-validator');

const Account = {
    first_name: 'required|string',
    last_name: 'required|string',
    email: 'required|email',
    password: 'required|string',
    repeat_password: 'required|string',
    birthday: 'required|integer',
};

const AccountLogin = {
    email: 'required|email',
    password: 'required|string',
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw {
            code: 400,
            error: v.errors
        };
    }
};

module.exports = {
    Account,
    AccountLogin,
    validate
};