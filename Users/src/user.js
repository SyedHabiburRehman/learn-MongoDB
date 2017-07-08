// whenever working with any data inside of mongo , it is always to import mongoose.
const mongoose = require('mongoose');
// schema object allows us to create schema for our user model
// schema is we expect our model to have some property e.g name, age etc
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;