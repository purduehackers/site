import Draggable from "react-draggable"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const HackNight = () => (
  <div className="bg-gray-dark min-h-screen">
    <div className="p-6 sm:p-12">
      <h1 className="text-5xl sm:text-9xl font-bold text-white">3. Hack Night</h1>
      <Draggable>
        <div className="border-solid border-black border-2 cursor-pointer
            w-full sm:w-1/2 rounded-xl bg-white relative top-0 right-0">
          <div className="w-full bg-black rounded-t-lg px-2 text-white font-mono font-bold
              border-white border-solid border-b-2 flex justify-between items-center">
            <div><FontAwesomeIcon icon={faWindows} size="1x" /> Window</div>
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </div>
          <div className="p-6">
            <div className="border-solid border-black border-2 p-8">
              <h2 className="font-bold text-3xl mb-4">The Night is Nigh 🌙</h2>
              <p className="text-mxs">
              Hack night is uninterrupted time for you to work on personal projects of 
              all kinds—anything from a little hack that you ship by the end of the night, 
              to part of a larger project. what you work on is up to you, but organizers will
              be there to provide technical & brainstorming help. there's only one rule: no 
              working on homework. it's friday night, plus you have the rest of the week to work 
              on your homework! this is time to work on something that excites you.
              </p>
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable>
        <div className="border-solid border-white border-2 cursor-pointer
            w-2/5 h-64 rounded-xl font-bold font-mono bg-black">
          <div className="w-full bg-gray-300 rounded-t-lg px-2
              border-black border-solid border-b-4 flex justify-between items-center">
            <div><FontAwesomeIcon icon={faWindows} size="1x" /> Window</div>
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </div>
          <div className="p-6 text-white">
            <h3>Nack Hight</h3>
            <p>Password: </p>
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
          <div className="hack-btn text-white border-white">Sign Up</div>
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