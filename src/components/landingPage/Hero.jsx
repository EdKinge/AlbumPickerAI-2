export function Hero() {
  return (
    <>
      <div className="content-center md:flex md:h-[500px] font-main">
        <div className="md:w-1/2 h-full text-center px-4">
          <div className="text-6xl text-start text-sky-600 mt-24 w-96 mx-auto">
            Find your new favourite album
          </div>
          <ul className="text-slate-300 mt-8 w-96 mx-auto text-start text-2xl list-disc list-inside">
            <li>
              Personalise your music taste
            </li>
            <li>
              Find the perfect music for you
            </li>
            <li>
              Get recommendations from a trained AI
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <div className="w-64 h-64 md:w-96 md:h-96 mx-auto mt-14 border-2 border-zinc-500">
            <img src="/DemoImage.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}