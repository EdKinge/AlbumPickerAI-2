export function Hero() {
  return (
    <>
      <div className="flex h-[500px] font-main">
        <div className="w-1/2 h-full text-center">
          <div className="text-5xl text-sky-600 mt-24 w-72 mx-auto">
            Find your new favourite album
          </div>
          <ul className="text-slate-300 list-disc mt-8 text-xl">
            <li>
              Personalise your music taste
            </li>
            <li>
              Find the perfect music for you
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-96 h-96 mx-auto mt-14 border-2 border-zinc-500">
            <img src="public/DemoImage.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}