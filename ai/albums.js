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

function CompareArtistStrings(genName, credName) {
  const generatedName = genName.toLowerCase().trim();
  const creditedName = credName.toLowerCase().trim();

  if (creditedName === generatedName || generatedName.includes(creditedName)) {
    return true;
  }
  return false;
}

//Check if generated artist name exists among search results
//Returns the search result with that artist
function ValidateArtist(data, albumName) {
  const generatedArtistName = albumName.split(", ")[1];

  //Compares the first 5 results to the artist's name
  for (let i = 0; i < 5; i++) {
    const creditedArtists = data.albums.items[i].artists;

    for (let j = 0; j < creditedArtists.length; j++) {
      //If the credited artist is a perfect match or is contained
      console.log(generatedArtistName);
      if (CompareArtistStrings(generatedArtistName, creditedArtists[j].name)) {
        return data.albums.items[i];
      }
    }
  }
  return false;
} 

export default async function GetAlbum(albumName) {
  var albumParameters;
  console.log(albumName);

  await GetAccessToken()
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
    console.log(data);

    const firstAlbum = ValidateArtist(data, albumName);
    if (!firstAlbum) {
      //There is no album with that artist's name
      console.log('no album with artist name');
      throw new Error;
    }

    //Check if it is a valid album
    //Valid if: there are search results and the first result is type album
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
 