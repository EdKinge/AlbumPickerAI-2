import { useState } from 'react'
import './App.css';
import BackButton from "./BackButton";
import RatingPanel from './RatingPanel';

function Rating({genres}) {
  const [ albumData, setAlbumData ] = useState({});
  const [ gotData, setGotData ] = useState(false);

  return (
    <>
      <div className="bg-zinc-800">
        <BackButton></BackButton>
        <div className="flex z-0 justify-center content-center">
          <div className="mt-36">
            <RatingPanel active={gotData} albumData={albumData} genres={genres} onSend={mes => sendMessage(mes)}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rating;