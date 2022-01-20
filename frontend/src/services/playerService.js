import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const createPlayer = async (username, email, country, password) => {
  await axios
    .post('/player/add', {
      username: username,
      email: email,
      country: country,
      password: password,
    })
    .then((response) => console.log(response.data.status));
};

const getPlayers = async () => {
  const { data } = await axios.get('/player');
  return data;
};

const getPlayerById = async (id) => {
  const { data } = await axios.get(`/player/${id}`);
  return data;
};

const getPlayerByUsername = async (username) => {
  const { data } = await axios.get(`/player/name/${username}`);
  return data;
};

const updatePlayer = async (username, newUsername) => {
  await getPlayerByUsername(username).then((response) => {
    console.log(username);
    axios.put('/player/update', {
      id: response.id,
      username: newUsername,
      email: response.email,
      country: response.country,
      password: response.password,
      role: response.role,
    });
  });
  // const { data } = await axios.post('/player/update', {
  //   p.id,
  //   username,
  //   email,
  //   country,
  // });
  // return data;
};

const deletePlayer = async (id) => {
  await axios.delete(`/player/delete/${id}`);
};

export {
  createPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  getPlayerByUsername,
};
