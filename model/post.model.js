const mongoose = require("mongoose");

const PostUser = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        unique : true
    },
    passeword : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true,
        unique : true
    },
},
{timestamps: true}
);

module.exports = mongoose.model("users",PostUser);