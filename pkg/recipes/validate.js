const { Validator } = require('node-input-validator');

const Recipe = {
    title: 'required|string',
    type: 'required|string',
    description: 'required|string',
    timetoprepare: 'required|string',
    grade: 'required|integer',
    numberofportion: 'required|integer',
    recipe: 'required|string',
    createdon: 'required|date'
};

const PartialRecipe = {
    title: 'string',
    type: 'string',
    description: 'string',
    timetoprepare: 'string',
    grade: 'integer',
    numberofportion: 'integer',
    recipe: 'string',
    createdon: 'date'
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
    Recipe,
    PartialRecipe,
    validate
};