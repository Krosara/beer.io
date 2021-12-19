import { useState, useEffect } from 'react';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnauthenticatedApp } from './UnauthenticatedApp';
import Cookies from 'js-cookie';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (Cookies.get('access_token')) {
      setIsLogged(true);
    }
  }, []);

  return isLogged ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
