const { Validator } = require('node-input-validator');

const Recipe = {
    photo: 'required|string',
    title: 'required|string',
    type: 'required|string',
    description: 'required|string',
    timetoprepare: 'required|string',
    numberofportion: 'required|integer',
    recipe: 'required|string',

};

const PartialRecipe = {
    title: 'string',
    description: 'string',
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