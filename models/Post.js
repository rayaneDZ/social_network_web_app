const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    content : {type: String, required : true},
    image_path : String,
    user : {type : String, required : true},
    profile_picture_path : {type : String, default : ''},
    pp_uuid : {type : String, default : ''},
    date : {type: Date, default : Date.now},
    reacts : {
        like : {
            number : {type: Number, default : 0},
            liked_by : {type: Array, default : []}
        },
        dislike : {
            number : {type: Number, default : 0},
            disliked_by : {type: Array, default : []}
        },
        comment : {
            number : {type: Number, default : 0},
            content : {type: Array, default : []}
        }
    }
});

module.exports = mongoose.model('Post', postSchema);