import axiosInstance from './axiosInstance';

const token = localStorage.getItem("token");
const productApi = {
    signUp: (data) => axiosInstance.post(`/auth/register`, data),
    signIn: (data) => axiosInstance.post(`/auth/login`, data),
    verify: (data) => axiosInstance.post(`/auth/verify`, data),
    profile: (token) => axiosInstance.get(`/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    getProduct: () => axiosInstance.get(`/product`),

    getProductBasket: (token) => axiosInstance.get(`/basket`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    getOneProduct: (id) => axiosInstance.get(`/eachPhone/${id}`),
    addToBasket: (token, id) => axiosInstance.post(`/basket/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteFromBasket: (token, id) => axiosInstance.delete(`/basket/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    removeFromBasket: (token) => axiosInstance.delete(`/basket`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    forgotPassword: (data) => axiosInstance.put('/auth/forgot-password', data),
    forgotPasswordCheck: (data) => axiosInstance.post('/auth/forgot-password-check', data),
    forgotPasswordNew: (data) => axiosInstance.put('/auth/forgot-password-new', data),


    // addReview: (token, data) => axiosInstance.post('/api/add-review', data, {
    //     headers: { Authorization: `Bearer ${token}` }
    // })

    addReview: (token, data) => axiosInstance.post('http://localhost:3001/api/reviews/add-review', data, {
        headers: { Authorization: `Bearer ${token}` }
    }),
    getReviews: (token) => axiosInstance.get('http://localhost:3001/api/reviews/all-reviews', {
        headers: { Authorization: `Bearer ${token}` }
    }),
    getDoneReviews: () => axiosInstance.get('http://localhost:3001/api/reviews/done-reviews'),


};

export default productApi;
