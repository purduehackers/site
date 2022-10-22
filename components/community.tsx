import Draggable from 'react-draggable'
import { useState, useContext } from 'react'

import { DraggableContext } from '../context/DraggableContext'

const Community = () => {
  const { draggable } = useContext(DraggableContext)
  return (
    <div className="bg-amber-200 min-h-screen">
      <div className="flex flex-col sm:p-12">
        <h1 className="text-5xl sm:text-9xl font-bold">1. Community</h1>
        <div className="flex w-full justify-between p-24">
          <div className="flex flex-col justify-between">
            <Draggable disabled={!draggable} handle=".handle">
              <div className="w-48 border-2 border-black flex flex-col justify-between items-center bg-white
                  h-48 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-pink-400/70">
                <div className="handle bg-pink-400 w-full flex border-b-2 border-black
                    cursor-pointer hover:bg-cyan-400 hover:text-white">
                  <p className="ml-1">X</p>
                  <div className="grow" />
                  <p>TITLE</p>
                  <div className="grow" />
                </div>
                <div className="w-full h-full p-4">
                  <div className="w-full h-full border-2 border-black bg-green-400"></div>
                </div> 
              </div>
            </Draggable>
            <Draggable disabled={!draggable} handle=".handle">
              <div className="w-48 border-2 border-black flex flex-col justify-between items-center bg-white
                  h-48 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-blue-400/70">
                <div className="handle hover:bg-cyan-400 hover:text-black w-full flex border-b-2 border-black
                    cursor-pointer bg-blue-600 text-white">
                  <p className="ml-1">_</p>
                  <div className="grow" />
                  <p>TITLE</p>
                  <div className="grow" />
                </div>
                <div className="w-full h-full p-8">
                  <div className="w-full h-full border-2 border-black"></div>
                </div> 
              </div>
            </Draggable>
          </div>
          <Draggable disabled={!draggable} handle=".handle">
              <div className="w-[40rem] border-2 border-black flex flex-col justify-between items-center bg-white
                  h-98 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-pink-400/80">
                <div className="handle hover:bg-cyan-400 text-black w-full flex border-b-2 border-black
                    cursor-pointer bg-cyan-400 hover:text-white">
                  <p className="ml-1">_</p>
                  <div className="grow" />
                  <p>TITLE</p>
                  <div className="grow" />
                </div>
                <div className="w-full h-full p-8 flex justify-between">
                  <div className="border-2 border-black w-3/4 h-full bg-amber-300 text-pink-500 font-pixel
                      p-8 text-sm">
                    asdfjsdlf idk. what is this !!!
                  </div>
                  <div className="w-3/12 h-full px-2">
                    <div className="border-2 border-black h-24"></div>
                    <div className="h-12 py-2 flex items-center">
                      <div className="border-2 border-black rounded-full w-8 h-8"></div>
                      <div className="w-2/3 border-2 border-b-0 border-black h-0"></div>
                    </div>
                  </div>
                </div> 
              </div>
            </Draggable>
        </div>
      </div>
    </div>
  )
}

export default Community
