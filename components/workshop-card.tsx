import Image from 'next/image'
import { Remarkable } from 'remarkable'
import { IEvent } from '../utils/interfaces/SanityEvent'
import { GithubSlugger } from 'github-slugger-typescript'

const WorkshopCard = (props: IEvent) => {
  const md = new Remarkable()
  const parsedDescription = md.render(props.description)
  const date = new Date(props.date)
  const slugger = new GithubSlugger()
  const eventUrl =
    'https://events.purduehackers.com/' + slugger.slug(props.name)

  return (
    <div className="max-w-sm mx-4 mt-2 overflow-hidden bg-white rounded shadow-email shadow-gray-800/30 border-2 border-slate-800 flex flex-col">
      <div className="px-6 py-4">
        <a
          className="mb-2 text-xl font-bold underline hover:text-amber-500"
          href={eventUrl}
          target="_blank"
        >
          {props.name}
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
            src={props.img}
            draggable={false}
          />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 mt-auto">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-sm">
          {props.location}
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-sm">
          Hackers: {props.rsvp}
        </span>
      </div>
    </div>
  )
}

export default WorkshopCard
