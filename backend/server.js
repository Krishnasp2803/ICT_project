const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const adminRoutes = require('./routes/admin_login');
const eventRoutes = require('./routes/event');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/booking');
const authenticateUser = require('./middleware/authenticateUser');
const authenticateAdmin = require('./middleware/authenticateAdmin');


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type, Authorization',
}));
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/userprofile', authenticateUser, userRoutes);
app.use('/api/admin/adminhome', authenticateAdmin, adminRoutes);
app.use('/api/event', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});