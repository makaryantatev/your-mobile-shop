import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getPhones = () => api.get('/product');
export const getPhoneById = (id) => api.get(`/product/${id}`);
export const createPhone = (data) => api.post('/product', data);
export const updatePhone = (id, data) => api.put(`/product/${id}`, data);
export const deletePhone = (id, token) => api.delete(`/product/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const adminLogin = (data) => api.post(`/auth//login/admin`, data);
export const adminProfile = (token) => api.get("/auth/profile/admin", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const getAllReviews = (adminToken) => api.get("/reviews/all-reviews", {
  headers: {
    Authorization: `Bearer ${adminToken}`,
  },
});

export const getDoneReviews = () => api.get("/reviews/done-reviews");
export const updateReviewStatus = (token, id, status) => api.put(`/reviews/put-reviews/${id}`, { status }, {
  headers: { 
    Authorization: `Bearer ${token}` 
  }
});

export default api;
