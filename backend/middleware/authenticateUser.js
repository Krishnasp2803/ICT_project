const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming you have a User model

const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using your JWT secret
    const user = await User.findById(decoded.id); // Find the user based on the decoded ID

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; // Attach user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error); // Log the error
    res.status(401).json({ message: 'Token verification failed' });
  }
};

module.exports = authenticateUser;
