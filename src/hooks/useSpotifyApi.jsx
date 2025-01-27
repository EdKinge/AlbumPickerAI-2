import axios from 'axios';
import { useEffect, useState } from 'react';

export function useSpotifyApi(albumName) {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    const PORT = import.meta.env.PORT || 5001;


    await axios.post(`http://localhost:${PORT}/api/spotify/data`, {
      params: {
        name: albumName
      }
    })
    .then(res => {
      setData(res);
      console.log(res);
      console.log('hello: res');
    })
    .catch(err => {
      console.log(err.message);
      console.log('hello: err');
      setError(err);
    });

    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, [albumName]);

  return { data, loading, error};
};