import axios from 'axios';

export function useSpotifyApi() {
  const fetchData = async (albumName) => {

    const PORT = import.meta.env.PORT || 5001;

    const response = await axios.post(`http://localhost:${PORT}/api/spotify/data`, {
      params: {
        name: albumName
      }
    });
    
    return response;
  };

  return { fetchData };
};