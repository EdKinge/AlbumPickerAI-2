import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export function useOpenaiApi() {
  const updateConversation = async (conversation) => {
    const PORT = import.meta.env.PORT || 5001;

    const response = await axios.post(`http://localhost:${PORT}/api/generate`, {
      messages: conversation,
    });

    return response;
  }

  return { updateConversation };
}