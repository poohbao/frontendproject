import axios from 'axios';

// Spring Boot API URL
const API_URL = 'http://localhost:8080/api/gallery'; 

const getAllImages = () => axios.get(API_URL);

const getImageById = (id) => axios.get(`${API_URL}/${id}`);

const createImage = (imageUrl, title, description) => {
  const formData = new FormData();
  formData.append('imageUrl', imageUrl);
  formData.append('title', title);
  formData.append('description', description);

  return axios.post(`${API_URL}/image_url`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const updateImage = (id, imageUrl) => axios.put(`${API_URL}/${id}`, imageUrl);

const deleteImage = (id) => axios.delete(`${API_URL}/${id}`);

export { getAllImages, getImageById, createImage, updateImage, deleteImage };
