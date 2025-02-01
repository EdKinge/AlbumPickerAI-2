import GenreButton from "../components/dashboard/GenreButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMusicFinder } from "../hooks/useMusicFinder";
import SignOutButton from "../components/dashboard/SignOutButton";

function Dashboard({onSubmit}) {
  const [ genres, setGenres ] = useState([]);
  const [ error, setError ] = useState(true);
  const { data, initPrompt, sendMessage } = useMusicFinder();
  const navigate = useNavigate();

  function handleClick(name) {
    if (genres.includes(name)) {
      genres.splice(genres.indexOf(name), 1);
    } else {
      genres.push(name);
    }

    setError(genres.length === 0);
  }

  async function handleNext() {
    if (genres.length >= 1) {
      await onSubmit(genres);
      navigate('/rating');
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="bg-zinc-800 min-h-screen bg-fixed pb-24">
        <SignOutButton />
        <div className="flex flex-col justify-center items-center text-slate-300 pt-32 font-main cursor-default">
          <div className="text-6xl font-bold">AlbumPickerAI</div>
          <div className="text-2xl mt-4 text-zinc-500">Select the genres you like, you'll be recommended an album</div>
        </div>
        <div className="flex flex-initial flex-wrap justify-center mx-auto w-1/2 mt-32">
            <GenreButton text="Rock" onSelect={() => handleClick("Rock")}></GenreButton>
            <GenreButton text="Pop" onSelect={() => handleClick("Pop")}></GenreButton>
            <GenreButton text="R&B" onSelect={() => handleClick("R&B")}></GenreButton>
            <GenreButton text="Jazz" onSelect={() =>handleClick("Jazz")}></GenreButton>
            <GenreButton text="Heavy Metal" onSelect={() => handleClick("Heavy Metal")}></GenreButton>
            <GenreButton text="Blues" onSelect={() => handleClick("Blues")}></GenreButton>
            <GenreButton text="Country" onSelect={() => handleClick("Country")}></GenreButton>
            <GenreButton text="Classical" onSelect={() => handleClick("Classical")}></GenreButton>
            <GenreButton text="World" onSelect={() => handleClick("World")}></GenreButton>
            <GenreButton text="Soul" onSelect={() => handleClick("Soul")}></GenreButton>
            <GenreButton text="Folk" onSelect={() => handleClick("Folk")}></GenreButton>
            <GenreButton text="Alt rock" onSelect={() => handleClick("Alt rock")}></GenreButton>
            <GenreButton text="Funk" onSelect={() => handleClick("Funk")}></GenreButton>
            <GenreButton text="Punk" onSelect={() => handleClick("Punk")}></GenreButton>
            <GenreButton text="Reggae" onSelect={() => handleClick("Reggae")}></GenreButton>
            <GenreButton text="Latin" onSelect={() => handleClick("Latin")}></GenreButton>
            <GenreButton text="Dance" onSelect={() => handleClick("Dance")}></GenreButton>
            <GenreButton text="Indie" onSelect={() => handleClick("Indie")}></GenreButton>
            <GenreButton text="Disco" onSelect={() => handleClick("Disco")}></GenreButton>
            <GenreButton text="Grunge" onSelect={() => handleClick("Grunge")}></GenreButton>
            <GenreButton text="Ambient" onSelect={() => handleClick("Ambient")}></GenreButton>
        </div>
        {
          error ?
          <div className="flex justify-center">
            <div className="font-main text-3xl mt-4 text-slate-300 opacity-20 underline cursor-default">Let's go</div>
            <svg className="mt-5 ml-2 opacity-20" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 9"><path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#fff" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
          </div> :
          <div className="flex justify-center">
            <div className="font-main text-3xl mt-4 text-slate-300 underline cursor-pointer" onClick={() => handleNext()}>Let's go</div>
            <svg className="mt-5 ml-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 9"><path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#fff" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
          </div>
        }
      </div>
    </>
  )
};

export default Dashboard;