const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema({
  admin_name: { type: String, required: true },
  admin_email: { type: String, required: true, unique: true },
  admin_password: { type: String, required: true },
}, {
  timestamps: true,
});

// Password Hashing Middleware
adminSchema.pre('save', async function (next) {
  if (!this.isModified('admin_password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.admin_password = await bcrypt.hash(this.admin_password, salt);
  next();
});

// Password Match Method
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.admin_password);
};

adminSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}

const Admin = mongoose.model('Admin', adminSchema);
module.exports=Admin;