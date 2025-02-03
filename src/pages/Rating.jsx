import { useState } from 'react'
import BackButton from "../components/dashboard/BackButton";
import RatingPanel from '../components/dashboard/RatingPanel';

function Rating({genres}) {
  const [ albumData, setAlbumData ] = useState({});
  const [ gotData, setGotData ] = useState(false);

  return (
    <>
      <div className="bg-zinc-800">
        <BackButton to="/dashboard" />
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