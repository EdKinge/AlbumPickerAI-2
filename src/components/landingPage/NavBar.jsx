export function NavBar() {
  return (
    <>
      <div className="flex marker:sticky top-0 font-main text-2xl text-slate-300 h-24 border-b-4 border-zinc-500">
        <div className="my-auto ml-4 w-32 text-sky-600 cursor-pointer font-bold text-4xl">
          AlbumPickerAI
        </div>
        <div className="flex justify-center mx-auto">
          <div className="mx-20 my-auto cursor-pointer">Features</div>
          <div className="mx-20 my-auto cursor-pointer">Pricing</div>
          <div className="mx-20 my-auto cursor-pointer">How it works</div>
        </div>
        <div className="mr-4 h-8 w-32 my-auto text-center py-auto bg-slate-300 text-sky-800 rounded-lg cursor-pointer">
          Get started
        </div>
      </div>
    </>
  )
}