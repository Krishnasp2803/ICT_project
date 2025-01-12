// src/services/api.js
import axios from 'axios';

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      throw new Error('No token found. Please log in again.');
    }

    const response = await axios.get('http://localhost:5000/api/user/userprofile', {
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
