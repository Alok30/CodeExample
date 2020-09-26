const mongoose = require('mongoose');

const { Schema } = mongoose;


const authorModel = new Schema(
    {
        name: { type: String },
        book: { type: String },
        age: { type: String },
    }
);
var Author = module.exports = mongoose.model('Author', authorModel);
module.exports.get = function (callback, limit) {
    Author.find(callback).limit(limit);
}


module.exports = mongoose.model('Author', authorModel);