import React, { useEffect, createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = Cookies.get('access_token');

    setUser(token);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const user = useContext(AuthContext);

  return [user];
};

export { AuthProvider, useAuth };
