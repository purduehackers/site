import { createContext } from 'react'

export interface DraggableInterface {
  draggable: boolean
  setDraggable: Function
}

export const DraggableContext = createContext<DraggableInterface>({
  draggable: false,
  setDraggable: () => {}
})
