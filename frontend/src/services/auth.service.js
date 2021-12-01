import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:8080/api';

const login = (username, password) => {
  return axios
    .post(
      '/login',
      {
        username,
        password,
      }
      // { headers: { 'Access-Control-Allow-Origin': 'http://locahost:3000/' } }
    )
    .then((response) => {
      if (response.data.token) {
        console.log(response.data);
        Cookies.set('access_token', JSON.stringify(response.data.access_token));
        Cookies.set(
          'refresh_token',
          JSON.stringify(response.data.refresh_token)
        );
      }
      return response.data;
    });
};

// axios.interceptors.request.use(
//   (config) => {
//     let token = Cookies.get('access_token');

//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }

//     config.headers['Content-Type'] = 'application/json';
//     // config.headers['Access-Control-Allow-Origin'] = '*';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// const logout = () =>
//   Cookies.remove('access_token', { path: '', domain: 'http://localhost:8080' });

export { login };
