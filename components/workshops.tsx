const Workshops = () => (
  <div className="bg-amber-50">
    <div className="h-screen">
      <div>
        <div className="grid grid-cols-5">
          <div className="p-5">
            <div className="p-2 border-2 border-slate-800 font-noto">
              Today's Weather:<br></br>
              //we will fetch today's weather
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="text-5xl text-center font-noto sm:text-9xl">Workshop</h1>
          </div>
          <div className="p-5">
            <div className="p-2 border-2 border-slate-800 font-noto">
              Today's Sponsor:<br></br>
              //we will fetch our sponsors here
            </div>
          </div>
        </div>
        <div className="w-full h-1 mt-3 bg-slate-700"></div>
        <h3 className="text-2xl text-center font-noto">Purdue Hackers Inc. 2022 10.28.</h3>
        <div className="w-full h-1 mt-2 bg-slate-700"></div>
        <div className="grid grid-cols-3">
          <div className="flex items-center justify-center col-start-2">
            <img className="h-2/3" src="/img/typewriter.png"></img>          
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Workshops
