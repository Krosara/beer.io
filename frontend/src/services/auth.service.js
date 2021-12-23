import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://localhost:8080';

const Login = (username, password, config) => {
  return axios
    .post(API_URL + '/auth/login', {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.access_token) {
        Cookies.set('access_token', JSON.stringify(response.data.access_token));
        Cookies.set(
          'refresh_token',
          JSON.stringify(response.data.refresh_token)
        );
        console.log(jwtDecode(response.data.access_token));
      }
      return response.data;
    });
};

const logout = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export { Login, logout };
