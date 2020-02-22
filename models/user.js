const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);