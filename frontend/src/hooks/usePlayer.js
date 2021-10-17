import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const usePlayer = () => {
  const [state, setState] = React.useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async () => {
    setState({ loading: true });
    try {
      const res = await axios.get('/player');
      setState({ data: res.data });
      setState({ error: null });
    } catch (err) {
      setState({ error: err.message });
    } finally {
      setState({ loading: false });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [state.data]);

  return { ...state };
};

export default usePlayer;
