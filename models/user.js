// User model goes here
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  }
});

const Username = mongoose.model('Username', userSchema);

module.exports = Username;