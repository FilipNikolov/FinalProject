const { Validator } = require('node-input-validator');

const Account = {
    firstname: 'required|string',
    lastname: 'required|string',
    password: 'required|string',
    repeatpassword: 'required|string',
    email: 'required|string',
    birthday: 'required|date',
    avatar: 'string'
};
const AccountLogin = {
    email: 'required|email',
    password: 'required|string',
};
const UpdateProfile = {
    firstname: 'required|string',
    lastname: 'required|string',
    password: 'required|string',
    email: 'required|string',
    birthday: 'required|string',
    avatar: 'string'

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
    UpdateProfile,
    validate
};