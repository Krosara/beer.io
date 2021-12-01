import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const createPlayer = async (username, email, country) => {
  await axios.post('/player/add', {
    username,
    email,
    country,
  });
};

const getPlayers = async () => {
  const { data } = await axios.get('/player');
  return data;
};

const getPlayerById = async (id) => {
  const { data } = await axios.get(`/player/${id}`);
  return data;
};

const updatePlayer = async (id, username, email, country, role, score) => {
  await axios.post('/player/add', {
    id,
    username,
    email,
    country,
    role,
    score,
  });
};

const deletePlayer = async (id) => {
  await axios.delete(`/player/delete/${id}`);
};

export { createPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer };
