import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';

export default function useAuthState() {
  const dispatch = useDispatch();
  const [authStateChecking, setAuthStateChecking] = useState(true);
  const [isAuthenticated, updateAuthState] = useState(false);
  const signInState = useSelector((state) => ({
    loading: state?.signin?.loading ?? false,
    data: state?.signin?.data ?? null,
    error: state?.signin?.error ?? null,
  }));

  useEffect(() => {
    // Get the jwt token is stored in cookie
    const authToken = Cookies.get('access_token');
    if (!authToken) {
      console.log('Cookie not found');
      updateAuthState(false);
      setAuthStateChecking(false);
      return;
    }
  });

  return { isAuthenticated, authStateChecking };
}
