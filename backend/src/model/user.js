const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: { type: String, require: true, unique: true, allowNull: false, lowercase: true },
    password: { type: String, require: true, select: false, allowNull: false },
    created: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted;
        return next();
    });
});

module.exports = mongoose.model('User', UserSchema);