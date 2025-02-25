import { useState, useEffect } from "react";
import { addFeedbackDoc } from "../firebase/feedbackServices";
import { serverTimestamp } from "firebase/firestore";

export const useFeedback = () => {
  const [ message, setMessage ] = useState('');
  const [ error, setError ] = useState(null);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ cooldownTime, setCooldownTime ] = useState(null);

  useEffect(() => {
    // Check localStorage for existing cooldown
    const lastSubmission = localStorage.getItem("lastFeedbackTime");
    if (lastSubmission) {
      const timeElapsed = Date.now() - parseInt(lastSubmission, 10);

      if (timeElapsed > 60000) {
        setCooldownTime(0);
        setIsSubmitting(false);
      } else {
        setCooldownTime(60000);
        setIsSubmitting(true);
      }
    }
  }, []);

  useEffect(() => {
    // Countdown for the cooldown timer
    if (cooldownTime > 0) {
      const timer = setInterval(() => {
        setCooldownTime((prev) => prev - 1000);
      }, 1000);
      setIsSubmitting(true);

      return () => clearInterval(timer);
    } else {
      setIsSubmitting(false);
    }
  }, [cooldownTime]);

  const sendFeedback = (e) => {
    e.preventDefault();

    if (cooldownTime === 0) {
      addFeedbackDoc(message, serverTimestamp())
      .then(() => {
        setIsSubmitting(true);

        localStorage.setItem("lastFeedbackTime", Date.now().toString());
        setCooldownTime(60000);
        setMessage("");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
      });
    }
  };
  return { message, isSubmitting, setMessage, sendFeedback };
}