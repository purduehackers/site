import Draggable from "react-draggable"

const HackNight = () => (
  <div className="bg-gray-dark min-h-screen">
    <div className="p-6 sm:p-12">
      <h1 className="text-5xl sm:text-9xl font-bold text-white">3. Hack Night</h1>
      <Draggable>
        <div className="border-solid border-black border-4 cursor-pointer
            w-1/2 h-52 min-w-fit rounded-xl font-bold font-mono bg-white">
          <div className="w-full h-6 bg-gray-300 rounded-t-lg 
              border-black border-solid border-b-4">
            <div></div>
          </div>
          <div className="p-6">
            <h3>The Night is Nigh</h3>
            <div className="border-solid border-black border-4">
              <p className="text-sm">
                Potato poatatotoo
              </p>
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable>
        <div className="border-solid border-black border-4
            px-2 py-2 w-96 h-20 min-w-fit rounded-3xl font-bold font-mono
            text-sm bg-black">
          <div className="w-full h-2 bg-white">

          </div>
          <p className="text-green-500">
            Potato poatatotoo
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div className="border-solid border-black border-4
            px-2 py-2 w-96 h-20 min-w-fit rounded-3xl font-bold font-mono
            text-sm bg-black">
          <div className=" w-full h-2 bg-white">

          </div>
          <p className="text-white">
            Potato poatatotoo
          </p>
        </div>
      </Draggable>
    </div>
  </div>
)

export default HackNight