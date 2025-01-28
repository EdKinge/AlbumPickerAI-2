import { useEffect } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { useMusicFinder } from './hooks/useMusicFinder';

export default function RatingPanel({active, albumData, onSend, genres}) {
  const { data, loading, initPrompt, sendMessage } = useMusicFinder();

  useEffect(() => {
    initPrompt(genres);
  },[genres]);

  return (
    <>
    {
      loading ?
      <div>
        <div className="flex flex-col justify-between mt-14 mx-auto">
          <div className="w-64 h-64 mx-auto border-2 border-slate-600">
            <img src={data.image} />
          </div>
          <div className="text-xl text-slate-200 cursor-default">
            {data.title}
          </div>
          <div className="text-slate-600 cursor-default">
            {data.artist}
          </div>
          <div className="flex justify-between mt-14 w-56 mx-auto">
            <div className="rounded-full cursor-pointer bg-red-500 w-8 h-8" onClick={() => sendMessage('1')}>
              <svg className="m-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#a1a1aa" d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"/></svg>
            </div>
            <div className="rounded-full cursor-pointer bg-orange-500 w-8 h-8" onClick={() => sendMessage('2')}></div>
            <div className="rounded-full cursor-pointer bg-yellow-500 w-8 h-8" onClick={() => sendMessage('3')}></div>
            <div className="rounded-full cursor-pointer bg-lime-600 w-8 h-8" onClick={() => sendMessage('4')}></div>
            <div className="rounded-full cursor-pointer bg-green-800 w-8 h-8" onClick={() => sendMessage('5')}>
              <svg className="m-auto mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#a1a1aa" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>
            </div>
          </div>
        </div>
        <div className="cursor-pointer text-center mt-3 text-slate-200" onClick={() => sendMessage('skip')}>Skip</div>
      </div>
      :
      <div className="mt-64">
        <div className="flex justify-center content-center">
          <ThreeDot variant="pulsate" color="#cbd5e1" size="medium" text="" textColor="" />
        </div>
        <div className="flex justify-between mt-14 w-56 mx-auto opacity-40">
          <div className="rounded-full cursor-default bg-red-500 w-8 h-8">
            <svg className="m-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#a1a1aa" d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"/></svg>
          </div>
          <div className="rounded-full cursor-default bg-orange-500 w-8 h-8"></div>
          <div className="rounded-full cursor-default bg-yellow-500 w-8 h-8"></div>
          <div className="rounded-full cursor-default bg-lime-600 w-8 h-8"></div>
          <div className="rounded-full cursor-default bg-green-800 w-8 h-8">
            <svg className="m-auto mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#a1a1aa" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>
          </div>
        </div>
        <div className="cursor-default text-center mt-3 opacity-40 text-slate-200">Skip</div>
      </div>
    }
    </>
  );
}