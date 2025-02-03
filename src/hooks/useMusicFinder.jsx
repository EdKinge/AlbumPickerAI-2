import { useEffect, useState } from "react";
import { useOpenaiApi } from "./useOpenaiAPI";
import { useSpotifyApi } from "./useSpotifyApi";

export function useMusicFinder() {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ conversation, setConversation ] = useState([]);
  const { updateConversation } = useOpenaiApi(null);
  const { fetchData } = useSpotifyApi(null);

  function initPrompt(genres) {
    setLoading(true);
    const initMessage = "You will act as a musical album recommendation tool. I will send a message with a ranking from 1-5 (5 being the best) or a skip for your album suggestion, and you must recommend me another one that I may like. Your response should be in the format: Title; Artist and nothing else. "
    + "I like " + genres.toString() + ", start by recommending me an album. Every suggestion must be an album from the spotify catalogue.";

    sendMessage(initMessage);
  }

  async function sendMessage(newMessage) {
    setLoading(true);
    let newConversation = [...conversation,
      { role: 'user', content: newMessage}
    ];

    //The AI is asked for an album
    //If it exceeds 5 attempts, there is no response
    let foundAlbum = false;

    for (let i = 0; i < 5; i++) {
      console.log(i);
      
      await updateConversation(newConversation)
      .then(res => {
        console.log(res.data);


        if (!error) {
          newConversation.push(
            { role: 'assistant', content: res.data}
          );
          setConversation(newConversation);
        }
        return getAlbumData(res.data);
      })
      .catch(err => {
        setError(err);
      });

      //If a result is found, stop looping
      if (!error) {
        foundAlbum = true;
        break;
      }
    }

    //Show "Sorry please come back later" message
    if (!foundAlbum) {
      console.log('error');
      setError(true);
    } else {
    }

  };

  function CompareArtistStrings(genName, credName) {
    const generatedName = genName.toLowerCase().trim();
    const creditedName = credName.toLowerCase().trim();
  
    if (creditedName === generatedName || generatedName.includes(creditedName)) {
      return true;
    }
    return false;
  };

  function ValidateArtist(data, albumName) {
    const regex = /;/;
    const generatedArtistName = albumName.split(regex)[1];
  
    //Compares the first 5 results to the artist's name
    for (let i = 0; i < 5; i++) {
      const creditedArtists = data.albums.items[i].artists;
  
      for (let j = 0; j < creditedArtists.length; j++) {
        //If the credited artist is a perfect match or is contained
        if (CompareArtistStrings(generatedArtistName, creditedArtists[j].name)) {
          return data.albums.items[i];
        }
      }
    }
    return false;
  } 

  async function getAlbumData(albumInfo) {
    return await fetchData(albumInfo)
    .then(res => res.data)
    .then(searchResult => {
      //Clean up the data

      const firstAlbum = ValidateArtist(searchResult, albumInfo);
      // console.log(firstAlbum);

      if (!firstAlbum) setError(true);

      if (searchResult.albums.items.length > 0 && searchResult.albums.items && firstAlbum.type == "album") {
        const albumData = {
          image: firstAlbum.images[0].url,
          title: firstAlbum.name,
          artist: firstAlbum.artists[0].name
        };
        setData(albumData);
        setLoading(false);
      }
    })
    .catch(err => {
      setError(err);
      console.log(err.message);
    })
  };

  useEffect(() => {
    // setLoading(true);
  },[])

  return { data, loading, error, initPrompt, sendMessage };
};