import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8080';

const login = (username, password, config) => {
  return axios
    .post(
      API_URL + '/auth/login',
      {
        username: username,
        password: password,
      }
      // { ...console.log(config.headers) }
      // { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    .then((response) => {
      if (response.data.token) {
        Cookies.set('access_token', JSON.stringify(response.data.access_token));
        Cookies.set(
          'refresh_token',
          JSON.stringify(response.data.refresh_token)
        );
      }
      return response.data;
    });
};

const logout = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export { login, logout };
