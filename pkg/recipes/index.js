const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes', {
    user_id: String,
    title: String,
    type: String,
    description: String,
    timetoprepare: String,
    grade: Number,
    numberofportion: Number,
    recipe: String,
    createdon: Date
},
    'recipes'
);
const getAll = async (user_id) => {
    return await Recipe.find({ user_id });

};
const getSingle = async (user_id, id) => {
    return await Recipe.findOne({ user_id, _id: id });
};

const create = async (data) => {
    let r = new Recipe(data);
    return await r.save();
};

const update = async (id, data) => {
    return Recipe.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    return await Recipe.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getSingle,
    create,
    update,
    remove
}