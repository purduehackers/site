const Workshops = () => (
  <div className="bg-[url('/img/workshop_bg_2.jpg')] bg-cover font-alegre">
    <div className="h-screen">
      <div className="mt-3">
        <div className="grid grid-cols-5">
          <div className="p-5">
            <div className="p-2 border-4 border-slate-800">
              <h1 className="font-bold">Today's Weather:</h1>
              Good day, Sunny :D <br />
              Cloud being gassy...
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="p-5 text-center text-8xl">Workshops</h1>
          </div>
          <div className="p-5">
            <div className="p-2 border-4 border-slate-800">
              <h1 className="font-bold">Today's Sponsor:</h1>
              Google<br />
              Meta<br />
            </div>
          </div>
        </div>
        <div className="w-full h-1 mt-3 bg-slate-700"></div>
        <div className="grid grid-cols-3">
          <div className="text-2xl text-center uppercase">Price 10 Cents</div>
          <div className="text-2xl text-center capitalize">Purdue Hackers Inc</div>
          <div className="text-2xl text-center uppercase">Issue # 10</div>
        </div>
        <div className="w-full h-1 bg-slate-700"></div>
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
