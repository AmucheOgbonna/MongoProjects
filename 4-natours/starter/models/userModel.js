const mongoose = require('mongoose');
const validator = require('validators');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    // validate: [validators.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Provide password'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Passwords confirm your password'],
    select: false,
  },
});
userSchema.pre('save', async function (next) {
  // Only run this function if password was acually modified
  if (!this.isModified('password')) return next();

  // Hash the password with count of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});
userSchema.methods.correctPassword = function (
  candidatePassword,
  userpassword
) {
  return bcrypt.compare(candidatePassword, userpassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
