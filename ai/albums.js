async function GetAccessToken(albumName) {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  var authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  };

  return await fetch('https://accounts.spotify.com/api/token', authParameters)
  .then(result => result.json())
  .then(data => {
    return data.access_token;
  });
};

export default async function GetAlbum(albumName) {
  var albumParameters;

  const accessToken = await GetAccessToken()
  .then(data => {
    albumParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data
      }
    };

  });

  return await fetch(`https://api.spotify.com/v1/search?q=${albumName}&type=album`, albumParameters)
  .then(result => result.json())
  .then(data => {
    const firstAlbum = data.albums.items[0];

    //Check if it is a valid album
    if (data.albums.items.length > 0 && data.albums.items && firstAlbum.type == "album") {
      return {
        image: firstAlbum.images[0].url,
        title: firstAlbum.name,
        artists: firstAlbum.artists[0]
      } 
    } else {
      console.log('album not found');
      throw new Error;
    }
  })


};
 