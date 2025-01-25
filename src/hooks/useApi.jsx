import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const useApi = (conversation) => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    await axios.post('http://localhost:5000/', {
      messages: conversation,
    })
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setError(err);
    })

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}