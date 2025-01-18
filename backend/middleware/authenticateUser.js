const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log("Received token:", token); // Log the received token

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;  // Attach the user to the request object
    next();
  } catch (error) {
    console.error("Token verification error:", error); // Log the specific error
    res.status(401).json({ message: 'Token verification failed' });
  }
};

module.exports = authenticateUser;
