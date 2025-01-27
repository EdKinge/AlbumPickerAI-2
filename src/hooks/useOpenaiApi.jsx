import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export function useOpenaiApi() {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const updateConversation = async (conversation) => {
    setLoading(true);
    const PORT = import.meta.env.PORT || 5001;

    await axios.post(`http://localhost:${PORT}/api/generate`, {
      messages: conversation,
    })
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(err => {
      setError(err);
      console.log(err.message);
    })

    setLoading(false);
  }

  return { data, loading, error, updateConversation };
}