const jwt = require('jsonwebtoken');
const Admin = require('../models/admin_login'); // Assuming you have a User model

const authenticateAdmin = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using your JWT secret
    const admin = await Admin.findById(decoded._id); // Find the user based on the decoded ID

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    req.admin = admin; // Attach user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error); // Log the error
    res.status(401).json({ message: 'Token verification failed' });
  }
};

module.exports = authenticateAdmin;
