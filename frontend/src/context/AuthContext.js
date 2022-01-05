import React, { useEffect, createContext, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://localhost:8080';

const AuthContext = createContext();

export default AuthContext;

const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() =>
    Cookies.get('tokens') ? JSON.parse(Cookies.get('tokens')) : null
  );

  const [user, setUser] = useState(() =>
    Cookies.get('tokens') ? jwtDecode(Cookies.get('tokens')) : null
  );

  // const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    await axios
      .post(API_URL + '/auth/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          // const user = jwtDecode(response.data.access_token);
          // const tokens = response.data;
          setUser(jwtDecode(response.data.access_token));
          setTokens(response.data);

          Cookies.set('tokens', JSON.stringify(response.data));
          // history.push('/');
          // if (user && tokens) {
          //   setUser(user);
          //   setTokens(tokens);
          //   Cookies.set('tokens', JSON.stringify(tokens));
          // }
          // history.push('/');
        }
        return response;
      });
  };
  // console.log(tokens);
  // console.log(tokens);

  let logout = () => {
    setTokens(null);
    setUser(null);
    Cookies.remove('tokens');
  };

  let getAccess = () => {
    return tokens.access_token;
  };

  let updateToken = async () => {
    await axios
      .get(API_URL + '/auth/token/refresh', {
        headers: { Authorization: `Bearer ${tokens.refresh_token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(jwtDecode(response.data.access_token));
          setTokens(response.data);
          Cookies.set('tokens', JSON.stringify(response.data));
        }
      });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (tokens) {
        updateToken().catch((error) => logout());
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [tokens]);

  // axios.interceptors.request.use((req) => {
  //   req.headers.authorization = `Bearer: ${tokens.access_token}`;
  //   return req;
  // });
  // console.log(tokens.refresh_token);
  const contextData = {
    user: user,
    login: login,
    logout: logout,
    getAccess: getAccess,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
