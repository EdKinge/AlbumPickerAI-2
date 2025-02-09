export function DesiredOutcome() {
  return (
    <>
      <div className="md:flex justify-evenly text-center text-xl text-slate-300">
        <div>
          <div className="w-40 h-40 lg:w-64 lg:h-64 mx-auto mt-14 border-2 border-zinc-500">
            <img src="/DashboardDemo.png" alt="" />
          </div>
          <div>
            1. Select your favourite genres
          </div>
        </div>
        <div>
          <div className="w-40 h-40 lg:w-64 lg:h-64 mx-auto mt-14 border-2 border-zinc-500">
            <img src="/Recommendation.jpg" alt="" />
          </div>
          <div>
            2. Get a recommendation
          </div>
        </div>
        <div>
          <div className="w-40 h-40 lg:w-64 lg:h-64 mx-auto mt-14 border-2 border-zinc-500 content-center">
            <img src="Ranking.png" alt="" />
          </div>
          <div>
            3. Give your rating
          </div>
        </div>
      </div>
    </>
  );
}