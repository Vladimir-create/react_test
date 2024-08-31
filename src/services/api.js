// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Ensure this points to your backend correctly
  // Add headers if needed, e.g., for CORS or Authorization
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer <token>', // If you have authentication
  }
});

export const fetchProducts = (page = 1, search = '', type = '') => {
  return api.get('/api/products', {
    params: { page, search, type }
  }).then(response => {
    console.log("API Response:", response.data);
    return response;
  }).catch(error => {
    console.error("Axios Error:", error);
    throw error;
  });
};