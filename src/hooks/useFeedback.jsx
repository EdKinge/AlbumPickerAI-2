import { useState } from "react";
import { sendFeedback } from "../firebase/feedbackServices";

export const useFeedback = () => {
  const [ message, setMessage ] = useState(null);



  return { message };
}