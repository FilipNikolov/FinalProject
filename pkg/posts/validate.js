const { Validator } = require('node-input-validator');

const Posts = {
    title: "required|string",
    description: "required|string",
    time_to_prepare: "required|integer",
    grade: "required|integer",
    number_of_portion: "required|string"
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
    Posts,
    validate
};