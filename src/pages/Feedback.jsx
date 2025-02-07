import { useFeedback } from "../hooks/useFeedback";

export default function Feedback() {
  const { message, sent, setMessage, sendFeedback } = useFeedback();

  return (
    <>
      <div className="flex flex-col items-center hover:cursor-default font-main text-slate-300">
        <div className="text-6xl text-center text-customBlack mt-64 text-sky-600">
          Got feedback?
        </div>
        {
          sent ?
          <>
          <div className="text-slate-300 text-2xl mt-16">
            Let us know here:
          </div>
            <div className="w-full flex justify-center mt-8">
              <form onSubmit={sendFeedback} className="w-1/3">
                <input value={message} onChange={(event) => {setMessage(event.target.value)}} className="block text-zinc-900 p-4 border-0 focus:outline-none focus:border-2 rounded-md w-full focus:border-sky-600 focus:ring-zinc-900"></input>
                <button type="submit" className="flex mt-4 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-sm text-slate-300 rounded-md bg-sky-600 p-2">Send feedback</button>
              </form>
            </div>
          </> :
          <div className="text-2xl mt-4">
            Thanks for letting us know!
          </div>
        }
      </div>
    </>
  )
}