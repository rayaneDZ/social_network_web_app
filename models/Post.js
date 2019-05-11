const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    content : {type: String, required : true},
    image_path : String,
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    date : {type: Date, default : Date.now},
    reacts : {
        like : {
            number : {type: Number, default : 0},
            liked_by : {type: Array, default : []}
        },
        comment : {
            number : {type: Number, default : 0},
            commented_by : {type: Array, default : []},
            content : {type: Array, default : []}
        }
    }
});

module.exports = mongoose.model('Post', postSchema);