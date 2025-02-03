import { useEffect } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { useMusicFinder } from '../../hooks/useMusicFinder';

export default function RatingPanel({active, albumData, onSend, genres}) {
  const { data, loading, error, initPrompt, sendMessage } = useMusicFinder();

  useEffect(() => {
    initPrompt(genres);
  },[genres]);

  return (
    <>
    {
      (loading && !error) ?
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
      </div> : error ? 

      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#ffcc4d" d="M35.07 32.558a1.92 1.92 0 0 0 .836-2.241c-.259-.81-1.07-1.317-1.921-1.317H32a1 1 0 0 1 0-2h1.5a1.5 1.5 0 1 0-.04-3c-.8.021-1.46-.623-1.46-1.423v-.003q.001-.441.176-.847a15.3 15.3 0 0 0 1.294-7.191C32.978 6.66 26.411.269 18.524.009C9.724-.281 2.5 6.766 2.5 15.5c0 2.371.548 4.609 1.5 6.619v1.88c0 1.086-.865 2.021-1.951 2a2 2 0 0 0-2.034 2.167C.101 29.225 1.069 30 2.133 30h8.039A1.17 1.17 0 0 1 11 32l-3.03.757a1.281 1.281 0 0 0 0 2.485c1.932.483 3.914.737 5.905.756l2.712.026c1.406.014 2.803-.31 4.029-1a8.3 8.3 0 0 1 5.642-.913c3.028.588 6.167.034 8.812-1.553"/><path fill="#65471b" d="M18.736 24.003q-1.133 0-2.244-.234c-2.693-.571-5.003-2.115-6.338-4.236a1 1 0 0 1 1.692-1.066c1.033 1.642 2.925 2.892 5.06 3.345c1.767.375 4.507.393 7.536-1.642a1 1 0 0 1 1.116 1.66c-2.129 1.43-4.489 2.173-6.822 2.173"/><ellipse cx="14" cy="12" fill="#65471b" rx="2" ry="3"/><ellipse cx="23" cy="14" fill="#65471b" rx="2" ry="3"/></svg>
        <div className="ml-4 text-2xl text-slate-300 font-main">
          Sorry the system is not currently working, please try again later
        </div> 
      </div> :

       <div>
        <div className="flex flex-col justify-between mt-14 mx-auto">
          <div className="w-64 h-64 mx-auto border-2 border-zinc-900 shadow-md shadow-zinc-300">
            <img className="w-full h-full" src={data.image} />
          </div>
          <div className="text-xl mt-3 text-slate-200 cursor-default w-64 overflow- line-clamp-2">
            {data.title}
          </div>
          <div className="text-slate-600 cursor-default w-64 line-clamp-2">
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
    }
    </>
  );
}