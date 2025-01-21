import { useEffect, useState } from 'react'
import './App.css';
import MakeRequest from '../ai/zuki';

function Rating() {
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    console.log(loaded);
    if (!loaded) {
      const message = "You will act as a musical album recommendation tool. I will send a message with a ranking from 1-5 (5 being the best) for your album suggestion, and you must recommend me another one that I may like. Your response must ONLY be in the format '{Title, Artist}' and nothing else.";
      MakeRequest(message);
      setLoaded(true);
    }

  }, []);

  function sendFeedback(feedbackNum) {
    MakeRequest(feedbackNum);
  };

  return (
    <>
      <div className="bg-zinc-800 h-screen w-screen">
        <div className="flex justify-center content-center">
          <div className="mt-36 text-slate-300">
            <div className="w-48 h-48 border border-slate-300">
              Album
            </div>
            <div>
              Title
            </div>
            <div>
              Artist
            </div>
            <div className="flex justify-between mt-14">
              <div className="rounded-full cursor-pointer bg-red-500 w-8 h-8" onClick={() => sendFeedback(1)}></div>
              <div className="rounded-full cursor-pointer bg-orange-500 w-8 h-8" onClick={() => sendFeedback(2)}></div>
              <div className="rounded-full cursor-pointer bg-yellow-500 w-8 h-8" onClick={() => sendFeedback(3)}></div>
              <div className="rounded-full cursor-pointer bg-lime-600 w-8 h-8" onClick={() => sendFeedback(4)}></div>
              <div className="rounded-full cursor-pointer bg-green-800 w-8 h-8" onClick={() => sendFeedback(5)}></div>
            </div>
            <div className="underline cursor-pointer text-center mt-3">Skip</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rating;
