import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const createBeer = async (brandName, type, country, description) => {
  await axios.post('/beer/add', {
    brandName,
    type,
    country,
    description,
  });
};

const getBeers = async () => {
  const { data } = await axios.get('/beer');
  return data;
};

const getBeerById = async (id) => {
  const { data } = await axios.get(`/beer/${id}`);
  return data;
};

const updateBeer = async (id, username, email, country, role, score) => {
  await axios.post('/beer/add', {
    id,
    username,
    email,
    country,
    role,
    score,
  });
};

const deleteBeer = async (id) => {
  await axios.delete(`/beer/delete/${id}`);
};

export { createBeer, getBeers, getBeerById, updateBeer, deleteBeer };
