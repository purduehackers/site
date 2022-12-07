import Draggable from 'react-draggable'
import { useState, useContext } from 'react'

import { DraggableContext } from '../context/DraggableContext'

const Community = () => {
  const { draggable } = useContext(DraggableContext)
  return (
    <div className="bg-amber-200 min-h-screen">
      <div className="flex flex-col sm:p-12">
        <h1 className="text-5xl sm:text-9xl font-bold">1. Community</h1>
      </div>
    </div>
  )
}

export default Community
