const express = require('express');
const Admin = require('../models/admin_login');
const router = express.Router();
const authenticateAdmin = require('../middleware/authenticateAdmin');

// Signup Route
router.post('/adminsignup', async (req, res) => {
  const { admin_name, admin_email, admin_password } = req.body;
  console.log(req.body); // Log the request body

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ admin_email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create new admin
    const newAdmin = await Admin.create({ admin_name, admin_email, admin_password });

    res.status(201).json({
      _id: newAdmin._id,
      admin_name: newAdmin.admin_name,
      admin_email: newAdmin.admin_email,
      admin_password: newAdmin.admin_password
    });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// Login Route
router.post('/adminlogin', async (req, res) => {
  const { admin_email, admin_password } = req.body;

  try {
    // Find admin by admin_email
    const admin = await Admin.findOne({ admin_email });
    console.log('Admin Object:', admin);

    if (admin && (await admin.matchPassword(admin_password))) {
      res.status(200).json({
        message: 'Login successful',
        _id: admin._id,
        admin_name: admin.admin_name,
        admin_email: admin.admin_email,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// Protect the profile route using the authenticateAdmin middleware
router.get('/adminhome', authenticateAdmin, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id); // Use the admin ID from the decoded JWT
    if (!admin) {
      return res.status(404).json({ message: 'admin not found' });
    }
    res.json(admin); // Send the admin details
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;