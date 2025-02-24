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

};

export default productApi;
