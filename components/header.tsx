import Draggable from 'react-draggable';
import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

const Header = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0
  })
  const [draggable, setDraggable] = useState<boolean>(false)

  const resizeHandler = () => {
    console.log(draggable)
    console.log(windowSize.width)
    console.log(window.innerWidth)

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    if (windowSize.width > 1200) {
      setDraggable(true)
    }
    else {
      setDraggable(false)
    }
  }

  useEffect((): any => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  });


  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen bg-amber-100 gap-y-4">
      <Draggable disabled={!draggable}>
        <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto">
          <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
            Purdue Hackers
          </h1>
        </div>
      </Draggable>
      <Draggable disabled={!draggable}>
        <div className="w-10/12 mx-auto sm:w-1/2">
          <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
            <p className="text-lg font-bold sm:text-xl">
              💛⚡️ a community of students who collaborate, learn, and build
              kick-ass technical projects
            </p>
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default Header
