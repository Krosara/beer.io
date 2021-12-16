import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:8080/api/';

const login = (username, password, config) => {
  return axios
    .post(
      'login',
      {
        username: username,
        password: password,
      }
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

// const logout = () =>
//   Cookies.remove('access_token', { path: '', domain: 'http://localhost:8080' });

export { login };
