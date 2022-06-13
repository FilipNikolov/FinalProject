const mongoose = require('mongoose');

const Posts = mongoose.model(
    'posts', {
    title: String,
    description: String,
    time_to_prepare: Number,
    grade: Number,
    number_of_portion: String
},
    'posts'
);
const create = async (posts) => {
    let p = new Posts(posts);
    return await p.save();
};
const getByID = async (id) => {
    return await Posts.findOne({ _id: id });
};
const getByTitle = async (title) => {
    return await Posts.findOne({ title });
};
const getAll = async () => {
    return await Posts.find({});
};
const update = async (id, posts) => {
    return await Posts.updateOne({ _id: id }, posts);
};
const remove = async (id) => {
    return await Posts.deleteOne({ _id: id });
};

module.exports = {
    create,
    getByID,
    getByTitle,
    getAll,
    update,
    remove
}