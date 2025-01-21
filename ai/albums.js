import axios from 'axios';

export default async function GetAlbums() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const baseUrl = 'https://accounts.spotify.com/api/token';

  const data = new URLSearchParams({
    'grant_type': 'client_credentials',
    'client_id': clientId,
    'client_secret': clientSecret
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };


  await axios.post(baseUrl, data, { headers })
  .then((result) => {
    console.log(result.json());
  })
  .catch((e) => {
    console.log('PHAT ERROR');
    console.log(e.message);
  });
};

GetAlbums();