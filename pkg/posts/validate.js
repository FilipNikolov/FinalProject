const { Validator } = require('node-input-validator');

const Recipes = {
    title: "required|string",
    type: "required|string",
    description: "required|string",
    time_to_prepare: "required|integer",
    grade: "required|integer",
    number_of_portion: "required|integer",
    recipe: "required|string"
};

const PartialRecipe = {
    type: "string",
    title: "string",
    description: "string",
    number_of_portion: "integer",
}


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
    Recipes,
    PartialRecipe,
    validate
};