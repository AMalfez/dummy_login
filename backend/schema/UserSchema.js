const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required: true},
    email : {type:String, required:true},
    gender:{type:String, required:true},
    skill:{type:String}
})

const User = mongoose.model('dummyuser',UserSchema);
module.exports = User;