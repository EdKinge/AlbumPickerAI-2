export function KeyFeatures({ref}) {

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 justify-center mt-10 w-2/3 mx-auto text-sky-600 text-2xl text-center">
        <div>
          <svg className="mx-auto mt-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M14.35 8.55q-.3-.75-.887-1.175T12.05 6.95q-.45 0-.875.125t-.775.475L8.95 6.1q.35-.35.95-.638T11 5.1V3h2v2.05q1.125.225 1.975.913T16.25 7.75zM19.8 22.6L15.2 18q-.375.375-1.025.613T13 18.9V21h-2v-2.15q-1.4-.35-2.337-1.275T7.3 15.25l2-.8q.3 1.05 1.013 1.8T12.2 17q.45 0 .825-.112t.725-.338L1.4 4.2l1.4-1.4l18.4 18.4z"/></svg>
          <div>Completely free</div>
        </div>
        <div className="mt-1">
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"><path fill="#fff" fillRule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z" clipRule="evenodd"/></svg>
          <div>Discover new music</div>
        </div>
        <div className="mt-3">
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>
          <div className="mt-1">Give your ranking</div>
        </div>
        <div className="mt-3">
          <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
          <div>Send us feedback</div>
        </div>
      </div>
    </>
  )
}