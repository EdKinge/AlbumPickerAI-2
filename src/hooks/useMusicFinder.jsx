import { useEffect, useState } from "react";
import { useOpenaiApi } from "./useOpenaiAPI";
import { useSpotifyApi } from "./useSpotifyApi";

export function useMusicFinder() {
  const [ message, setMessage ] = useState(null);
  const [ conversation, setConversation ] = useState([]);
  const { data, loading, error, updateConversation } = useOpenaiApi(null);

  function initPrompt(genres) {
    const initMessage = "You will act as a musical album recommendation tool. I will send a message with a ranking from 1-5 (5 being the best) or a skip for your album suggestion, and you must recommend me another one that I may like. Your response should be in the format: Title; Artist and nothing else. "
    + "I like " + genres.toString() + ", start by recommending me an album. Every suggestion must be an album from the spotify catalogue.";

    sendMessage(initMessage);
  }

  async function sendMessage(newMessage) {
    let newConversation = [...conversation,
      { role: 'user', content: newMessage}
    ];

    await updateConversation(newConversation);
  };

  useEffect(() => {
    initPrompt(['Rock', 'Pop']);
  },[]);


  return { initPrompt };
};