// src/api/faqApi.js
import axios from 'axios';

// Spring Boot API URL

const API_URL = 'http://localhost:8080/api/faq'; 

const getAllFAQs = () => axios.get(API_URL);

const getFAQById = (id) => axios.get(`${API_URL}/${id}`);

const createFAQ = (faq) => axios.post(API_URL, faq);

const updateFAQ = (id, faq) => axios.patch(`${API_URL}/${id}`, faq);

const deleteFAQ = (id) => axios.delete(`${API_URL}/${id}`);

export { getAllFAQs, getFAQById, createFAQ, updateFAQ, deleteFAQ };
