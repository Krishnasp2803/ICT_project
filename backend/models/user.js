const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// User Schema
const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  user_email: { type: String, required: true, unique: true },
  user_password: { type: String, required: true },
  user_contactno: { type: Number, required: true },
}, {
  timestamps: true,
});

// Password Hashing Middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('user_password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.user_password = await bcrypt.hash(this.user_password, salt);
  next();
});

// Password Match Method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.user_password);
};


// JWT generation method
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}


const User = mongoose.model('User', userSchema);
module.exports=User;
