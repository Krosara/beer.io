import React from 'react';
import useAuthState from './hooks/useAuthState';
import Router from './Router';

function App() {
  const { isAuthenticated, authStateChecking } = useAuthState();
  if (authStateChecking) {
    return <p>Loading....</p>;
  }
  return <Router isAuth={isAuthenticated} />;
}

export default App;
