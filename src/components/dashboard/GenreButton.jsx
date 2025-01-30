import { useState } from "react";

export default function GenreButton({text, onSelect}) {
  const [ selected, setSelected ] = useState(false);

  function handleSelect() {
    setSelected(!selected);
    onSelect();
  }

  return (
    <>
      {
        selected ? 
        <div className="border-2 px-4 font-main mx-2 my-2 content-center inline-block rounded-lg bg-sky-600 text-slate-200 border-zinc-500 cursor-pointer text-center" onClick={handleSelect}>
          {text}
        </div> :
        <div className="border-2 px-4 font-main mx-2 my-2 content-center inline-block rounded-lg bg-zinc-900 text-sky-600 border-zinc-500 cursor-pointer text-center" onClick={handleSelect}>
          {text}
        </div>
      }
    </>
  );
};