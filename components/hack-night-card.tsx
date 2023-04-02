import Draggable from 'react-draggable'
import { useContext, useState } from 'react'
import { DraggableContext } from '../context/DraggableContext'

import Image from 'next/image'
import { Remarkable } from 'remarkable'
import { IEvent } from '../utils/interfaces/SanityEvent'
import { GithubSlugger } from 'github-slugger-typescript'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLeftLong,
  faRightLong,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const HackNightCard = ({
    name,
    dateProp,
    description,
    rsvp,
    img,
    location,
    index
  }: { name: string, 
    dateProp: Date, 
    description: string, 
    rsvp: string, 
    img: string, 
    location: string,
    index: number
  }) => {
  const { draggable } = useContext(DraggableContext)

  const md = new Remarkable()
  const parsedDescription = md.render(description)
  const date = new Date(dateProp)
  const slugger = new GithubSlugger()
  const eventUrl =
    'https://events.purduehackers.com/' + slugger.slug(name)

  return (
    <Draggable 
        disabled={!draggable}
        defaultPosition={{ x: 40 * index, y: 10 + 18 * index }}>
      <div
          className={`w-96 min-w-fit max-w-sm mx-4 mt-2 overflow-hidden bg-white rounded shadow-email shadow-gray-800/30 border-2 
            border-slate-800 flex flex-col absolute`}>
        <div
          className="handle w-full bg-gray-300 px-2 text-black font-mono font-bold
            border-black border-solid border-b-2 flex justify-between items-center cursor-pointer"
        >
          <div>
            <FontAwesomeIcon icon={faWindows} size="1x" /> Window
          </div>
        </div>
        <div className="px-6 py-4">
          <a
            className="mb-2 text-xl font-bold underline hover:text-amber-500"
            href={eventUrl}
            target="_blank"
          >
            {name}
          </a>
          <p className="text-slate-500">{date.toDateString()}</p>
          <div className="mt-2 h-[168px] overflow-scroll text-base text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: parsedDescription }}></div>
          </div>
        </div>
        <div className="relative mx-6">
          <div className="w-full">
            <Image
              className="rounded w-auto h-auto"
              width={0}
              height={0}
              sizes="100%"
              alt="Image from the Events site"
              src={img}
              draggable={false}
            />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 mt-auto">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-sm">
            {location}
          </span>
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-sm">
            Hackers: {rsvp}
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default HackNightCard
