// src/services/api.js
import axios from 'axios';

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      throw new Error('No token found. Please log in again.');
    }

    const response = await axios.get('https://ict-project-yp5v.onrender.com/api/user/userprofile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};

export const fetchAdminData = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found. Please log in again.');
    }

    const response = await axios.get('https://ict-project-yp5v.onrender.com/api/admin/adminhome', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error.message);
    throw error;
  }
};


