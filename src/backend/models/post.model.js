const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        likers: {
            type: [String],
        },
    },
    {
        timestamps: true, // pour mettre la date exacte à laquelle il a été édité
    }
);

const model = mongoose.model('post', postSchema);

module.exports = mongoose.model('post', postSchema);
// post: nom dans la base de donnée
// postShema: sa structure en générale
