const express = require('express');
const User = require('../models/user'); 
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');


// Signup Route
router.post('/usersignup', async (req, res) => {
  const { user_name, user_email, user_password, user_contactno } = req.body;
  console.log(req.body); // Log the request body

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ user_email });
    if (existingUser) {
        
      return res.status(400).json({ message: 'User already exists' });
      
    }

    // Create new user
    const newUser = await User.create({ user_name, user_email, user_password, user_contactno });

    
    
    
    res.status(201).json({
      _id: newUser._id,
      user_name: newUser.user_name,
      user_email: newUser.user_email,
      user_password: newUser.user_password,
      user_contactno: newUser.user_contactno,
    });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login Route
router.post('/userlogin', async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    // Find user by user_email
    const user = await User.findOne({ user_email });
    console.log('User Object:', user);

    if (user && (await user.matchPassword(user_password))) {

        const token = user.generateToken();
      res.status(200).json({
        message: 'Login successful',
        _id: user._id,
        user_name: user.user_name,
        user_email: user.user_email,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// Protect the profile route using the authenticateUser middleware
router.get('/userprofile', authenticateUser, async (req, res) => {
    try {
      const user = await User.findById(req.user.id); // Use the user ID from the decoded JWT
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user); // Send the user details
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
