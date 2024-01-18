const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});

const User = mongoose.model('User', userSchema);


module.exports = User;