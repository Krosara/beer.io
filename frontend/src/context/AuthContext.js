import React, { useEffect, createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useHistory, Redirect } from 'react-router-dom';

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
  let history = useHistory();

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

  const contextData = {
    user: user,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
