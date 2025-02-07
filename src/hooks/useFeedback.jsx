import { useState } from "react";
import { addFeedbackDoc } from "../firebase/feedbackServices";

export const useFeedback = () => {
  const [ message, setMessage ] = useState('');
  const [ error, setError ] = useState(null);
  const [ sent, setSent ] = useState(false);

  const sendFeedback = (e) => {
    e.preventDefault();

    if (!sent) {
      addFeedbackDoc(message)
      .then(() => {
        setSent(true);
      })
      .catch((err) => {
        setError(err);
      })
    }
  };

  return { message, sent, setMessage, sendFeedback };
}