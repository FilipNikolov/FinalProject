const recipes = require("../../../pkg/recipes")
const {
    Recipe,
    RecipePartial,
    validate
} = require("../../../pkg/recipes/validate");

const getAll = async (req, res) => {
    try {
        let ps = await recipes.getAll(req.user.id);
        return res.send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }

};

const getSingle = async (req, res) => {
    try {
        let ps = await recipes.getSingle(req.user.id, req.params.id);
        if (!ps) {
            throw {
                code: 404,
                error: 'Recipe not found'
            }
        }
        return res.send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const create = async (req, res) => {
    try {
        await validate(req.body, Recipe);
        let data = {
            ...req.body,
            user_id: req.user.id
        };
        let ps = await recipes.create(data);
        return res.status(201).send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const update = async (req, res) => {
    try {
        await validate(req.body, Recipe);
        let data = {
            ...req.body,
            user_id: req.user.id
        };
        await recipes.update(req.params.id, data);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const updatePartial = async (req, res) => {
    try {
        await validate(req.body, RecipePartial);
        let data = {
            ...req.body,
            user_id: req.user.id
        };
        await recipes.update(req.params.id, data);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const remove = async (req, res) => {
    try {
        await recipes.remove(req.params.id);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

module.exports = {
    getAll,
    getSingle,
    create,
    update,
    updatePartial,
    remove
};